from django.conf.urls import include, url
from django.contrib import admin
from games import views

urlpatterns = [
    url(r'^games/', include('games.urls', namespace='games', app_name='games')),
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home_route, name="home_route"),
]
