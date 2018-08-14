import os

from django.conf import settings
from django.db import models


# Create your models here.
class PlaidItem(models.Model):
    access_token = models.CharField(max_length=100, null=False)
    item_id = models.CharField(max_length=100, null=False)
    environment = models.CharField(
        max_length=100,
        default=os.getenv('REACT_APP_PLAID_ENV', 'sandbox'),
        null=False)
    date_updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False)

    class Meta:
        ordering = ['-date_updated']
