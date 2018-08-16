from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()

class Organization(models.Model):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField()
    image = models.URLField()
    users = models.ManyToManyField(User)
    categories = models.ManyToManyField('Category')
    keywords = models.ManyToManyField('KeyWord')


class Category(models.Model):
    name = models.CharField(max_length=255, null=False)

class KeyWord(models.Model):
    word = models.CharField(max_length=255, null=False)

