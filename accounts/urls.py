from .views import RegisterUser
from django.urls import path


urlpatterns = [
    path('register/', RegisterUser.as_view()),
]
