from django.db import models
from accounts.models import CustomUser

# Create your models here.
class PlaidItem(models.Model):
    access_token = models.CharField(max_length=100)
    item_id = models.CharField(max_length=100)
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE)
