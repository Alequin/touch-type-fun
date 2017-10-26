
from django.conf.urls import url
from .views import GameView

urlpatterns = [
    url(r'^', GameView.as_view(), name="games-index"),
]
