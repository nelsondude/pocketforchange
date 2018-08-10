from . import views
from django.urls import path


urlpatterns = [
    path('get_access_token/', views.GetAccessToken.as_view()),
    path('create_public_token/', views.CreatePublicToken.as_view()),
    path('transactions/', views.transactions),
]
