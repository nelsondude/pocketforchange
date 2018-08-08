from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .forms import CustomUserCreationForm


User = get_user_model()

class RegisterUser(CreateAPIView):
    permission_classes = [AllowAny]
    def post(self, *args, **kwargs):
        form = CustomUserCreationForm(self.request.POST)
        if form.is_valid():
            form.save()
            return Response(status=200)
        return Response(form.errors, status=200)
