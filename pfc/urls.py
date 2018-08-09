from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from .views import FrontendView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('donate/', include('donate.urls')),
    path('plaid/', include('plaid_auth.urls')),
    path('accounts/', include('accounts.urls')),
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    path('api-token-verify/', verify_jwt_token),
    re_path('.*', FrontendView.as_view()),
]

if not settings.DEBUG:
    handler400 = 'pfc.views.handler404'
    handler403 = 'pfc.views.handler404'
    handler404 = 'pfc.views.handler404'
    handler500 = 'pfc.views.handler404'
