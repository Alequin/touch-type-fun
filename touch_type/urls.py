from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^games/', include('games.urls', namespace='games', app_name='games')),
    url(r'^admin/', admin.site.urls),
]
