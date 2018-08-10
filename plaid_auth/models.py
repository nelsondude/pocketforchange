from django.db import models
from django.conf import settings

# Create your models here.
class PlaidItem(models.Model):
    access_token = models.CharField(max_length=100)
    item_id = models.CharField(max_length=100)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE)
