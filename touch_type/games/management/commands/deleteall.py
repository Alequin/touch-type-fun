from django.core.management.base import BaseCommand, CommandError
from touch_type.games.models import Game, Score

class Command(BaseCommand):
    help = 'Deletes all games and scores'

    def handle(self, *args, **options):
        Score.objects.all().delete()
        Game.objects.all().delete()
