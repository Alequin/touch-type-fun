import graphene

import games.schema
from games.schema import CreateScore
from games.models import Score

class Query(games.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

class Mutations(graphene.ObjectType):
    create_score = CreateScore.Field(Score)

schema = graphene.Schema(query=Query, mutation=Mutations)
