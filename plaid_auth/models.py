from django.db import models
from accounts.models import User

# Create your models here.
class PlaidItem(models.Model):
    access_token = models.CharField(max_length=100)
    item_id = models.CharField(max_length=100)
    user = models.ForeignKey(User, related_name='plaid_items')
