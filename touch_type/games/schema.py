from graphene import relay, ObjectType, AbstractType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import Game, Score

class GameNode(DjangoObjectType):
    class Meta:
        model = Game
        filter_fields = ["title", "description", "body", "type", "difficulty"]
        interfaces = (relay.Node,)


class ScoreNode(DjangoObjectType):
    class Meta:
        model = Score
        filter_fields = ["game_id", "time_in_seconds"]
        interfaces = (relay.Node,)


class Query(AbstractType):
    game = relay.Node.Field(GameNode)
    all_games = DjangoFilterConnectionField(GameNode)

    score = relay.Node.Field(ScoreNode)
    all_scores = DjangoFilterConnectionField(ScoreNode)
