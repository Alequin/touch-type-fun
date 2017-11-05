import graphene
from graphene import relay, ObjectType, AbstractType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphql_relay.node.node import from_global_id

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

class CreateScore(graphene.Mutation):
    class Arguments:
        game_id = graphene.String()
        time_in_seconds = graphene.Int()

    ok = graphene.Boolean()

    def mutate(self, info, game_id, time_in_seconds):
        real_game_id = from_global_id(game_id)[1]
        game = Game.objects.get(id=real_game_id)
        score = Score(game=game, time_in_seconds=time_in_seconds)
        score.save()
        ok = True
        return CreateScore(ok=ok)

class Query(AbstractType):
    game = relay.Node.Field(GameNode)
    all_games = DjangoFilterConnectionField(GameNode)

    score = relay.Node.Field(ScoreNode)
    all_scores = DjangoFilterConnectionField(ScoreNode)
