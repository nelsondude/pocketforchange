from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

from .api.serializers import UserSerializer


def user_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    snippets = User.objects.all()
    serializer = UserSerializer(snippets, many=True)
    return JsonResponse(serializer.data, safe=False)
