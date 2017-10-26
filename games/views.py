# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from .models import Game

from django.http import HttpResponse
from django.http import JsonResponse
import json

from django.views.decorators.csrf import csrf_exempt
from django.core import serializers


@csrf_exempt
def games(request):
    if(request.method == 'GET'):
        return index_route(request)
    if(request.method == 'POST'):
        return create_route(request)

def index_route(request):
    payload = serializers.serialize('json', Game.objects.all())
    return HttpResponse(payload, 'application/json')

def create_route(request):
    data=json.loads(request.body)
    new_game = Game(
        title=data["title"], body=data["body"],
        time_limit_seconds=data["time_limit_seconds"], difficulty=Game.EASY
    )
    new_game.save()
    return JsonResponse({"save": new_game.pk != None })
