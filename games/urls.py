
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.games, name="games"),
    url(r'^(?P<id>\d+)$', views.games_id, name="games_id"),

    url(r'^records$', views.records, name="records"),
]
