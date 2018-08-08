import plaid
import json
import datetime
from django.http import JsonResponse
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt

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


@csrf_exempt
def get_access_token(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        public_token = data.get('token', '')
        exchange_response = client.Item.public_token.exchange(public_token)
        return JsonResponse(exchange_response)
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
