import plaid
import json
import datetime
from django.http import JsonResponse
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from plaid_auth.models import PlaidItem

from pfc.constants import (
    PLAID_CLIENT_ID,
    PLAID_ENV,
    PLAID_PUBLIC_KEY,
    PLAID_SECRET
)


client = plaid.Client(
    client_id = PLAID_CLIENT_ID,
    secret=PLAID_SECRET,
    public_key=PLAID_PUBLIC_KEY,
    environment=PLAID_ENV)


class GetAccessToken(APIView):
    permission_classes = [AllowAny]
    def post(self, *args, **kwargs):
        public_token = self.request.data.get('token', '')
        exchange_response = client.Item.public_token.exchange(public_token)
        access_token = exchange_response['access_token']
        item_id = exchange_response['item_id']
        plaid_item, created = PlaidItem.objects.get_or_create(
            access_token=access_token, item_id=item_id, user=self.request.user)
        return JsonResponse({'created': created})
    def get(self):
        raise Http404


@csrf_exempt
def transactions(request):
    data = json.loads(request.body.decode('utf-8'))
    access_token = data.get('access_token', '')
    start_date = "{:%Y-%m-%d}".format(
        datetime.datetime.now() + datetime.timedelta(-30))
    end_date = "{:%Y-%m-%d}".format(datetime.datetime.now())
    try:
        response = client.Transactions.get(access_token, start_date, end_date)
        return JsonResponse(response)
    except plaid.errors.PlaidError as e:
        return JsonResponse(
            {'error': {'error_code': e.code, 'error_message': str(e)}})
