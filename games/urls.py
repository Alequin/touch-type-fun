
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.games, name="games-index"),
    url(r'^(?P<id>\d+)$', views.games_id, name="games-index"),
]
