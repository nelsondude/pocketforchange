from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

from .forms import CustomUserCreationForm


jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
User = get_user_model()

class RegisterUser(CreateAPIView):
    permission_classes = [AllowAny]
    def post(self, *args, **kwargs):
        form = CustomUserCreationForm(self.request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            user = User.objects.get(username=username)
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)

            return Response({
                'success': True,
                'errors': [],
                'token': token
            }, status=200)
        return Response({'success': False, 'errors': form.errors}, status=200)
