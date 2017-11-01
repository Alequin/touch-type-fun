from graphene import relay, ObjectType, AbstractType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from games.models import Game, Record

class GameNode(DjangoObjectType):
    class Meta:
        model = Game
        filter_fields = ["title", "description", "body", "type", "difficulty"]
        interfaces = (relay.Node,)


class RecordNode(DjangoObjectType):
    class Meta:
        model = Record
        filter_fields = ["game_id", "time_in_seconds"]
        interfaces = (relay.Node,)


class Query(AbstractType):
    game = relay.Node.Field(GameNode)
    all_games = DjangoFilterConnectionField(GameNode)

    record = relay.Node.Field(RecordNode)
    all_records = DjangoFilterConnectionField(RecordNode)
