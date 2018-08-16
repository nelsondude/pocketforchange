import datetime
import os

import plaid
from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from pfc.constants import (PLAID_CLIENT_ID, PLAID_ENV, PLAID_PUBLIC_KEY,
                           PLAID_SECRET)
from plaid_auth.models import PlaidItem


client = plaid.Client(
    client_id = PLAID_CLIENT_ID,
    secret=PLAID_SECRET,
    public_key=PLAID_PUBLIC_KEY,
    environment=PLAID_ENV)


class GetAccessToken(APIView):
    def post(self, *args, **kwargs):
        public_token = self.request.data.get('token', '')
        exchange_response = client.Item.public_token.exchange(public_token)
        access_token = exchange_response['access_token']
        item_id = exchange_response['item_id']
        plaid_item, created = PlaidItem.objects.get_or_create(
            access_token=access_token,
            item_id=item_id,
            user=self.request.user,
        )
        return Response({'created': created})
    def get(self):
        raise Http404


class CreatePublicToken(APIView):
    def post(self, *args, **kwargs):
        user = self.request.user
        plaid_item = PlaidItem.objects.filter(
            user=user, environment=os.getenv('REACT_APP_PLAID_ENV')).first()
        response = client.Item.public_token.create(plaid_item.access_token)
        return Response(response)


class ListTransactions(APIView):
    def get(self, *args, **kwargs):
        plaid_item = PlaidItem.objects.filter(
            user=self.request.user,
            environment=os.getenv('REACT_APP_PLAID_ENV')).first()
        start_date = "{:%Y-%m-%d}".format(
            datetime.datetime.now() + datetime.timedelta(-30))
        end_date = "{:%Y-%m-%d}".format(datetime.datetime.now())
        try:
            response = client.Transactions\
                .get(plaid_item.access_token, start_date, end_date)
            return Response(response)
        except plaid.errors.PlaidError as e:
            return Response(
                {'error': {'error_code': e.code, 'error_message': str(e)}})
        except AttributeError:
            return Response(
                {'error': 'plaid_item does not exist in the database'}
            )
