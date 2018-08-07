"""pfc URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import logging
import os

from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings


class FrontendView(View):
    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build',
                                   'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse("""
                    This URL is only used when you have built the production
                    version of the app. Visit http://localhost:3000/ 
                    instead, or
                    run `yarn run build` to test the production version.
                    """, status=501, )


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('donate/', include('donate.urls')),
    re_path('.*', FrontendView.as_view()),
]
