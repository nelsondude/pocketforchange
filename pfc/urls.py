from django.contrib import admin
from django.urls import include, path, re_path
from django.conf import settings

from .views import FrontendView

from django.conf.urls import handler400, handler403, handler404, handler500

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('donate/', include('donate.urls')),
    path('plaid/', include('plaid_auth.urls')),
    re_path('.*', FrontendView.as_view()),
]

if not settings.DEBUG:
    handler400 = 'pfc.views.handler404'
    handler403 = 'pfc.views.handler404'
    handler404 = 'pfc.views.handler404'
    handler500 = 'pfc.views.handler404'
