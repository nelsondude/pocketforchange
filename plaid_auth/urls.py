from . import views
from django.urls import path


urlpatterns = [
    path('get_access_token/', views.get_access_token),
    path('transactions/', views.transactions),
]
