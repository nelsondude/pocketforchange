from django.test import TestCase
from django.contrib.auth.models import User

# Create your tests here.
import pytest

@pytest.mark.django_db
def test_my_user():
    qs = User.objects.all()
    assert not qs.exists()
