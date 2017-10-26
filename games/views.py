# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from django.core import serializers
import json

from .models import Game, Record

@csrf_exempt
def games(request):
    if(request.method == 'GET'):
        return get_all_games(request)
    if(request.method == 'POST'):
        return new_game(request)

def get_all_games(request):
    payload = serializers.serialize('json', Game.objects.all())
    return HttpResponse(payload, 'application/json')

def new_game(request):
    data=json.loads(request.body)
    new_game = Game(
        title=data["title"], body=data["body"],
        time_limit_seconds=data["time_limit_seconds"], difficulty=Game.EASY
    )
    new_game.save()
    return JsonResponse({"save": new_game.pk != None })

@csrf_exempt
def games_id(request, id):
    if(request.method == 'GET'):
        return get_one_game(request, id)

def get_one_game(request, id):
    game = Game.objects.filter(id=id)
    if(len(game) != 0):
        payload = serializers.serialize('json', game)
        return HttpResponse(payload, 'application/json')
    else:
        return HttpResponse(status=404)

@csrf_exempt
def records(request):
    if(request.method == 'GET'):
        return get_all_records(request)
    if(request.method == 'POST'):
        return new_record(request)

def get_all_records(request):
    payload = serializers.serialize('json', Record.objects.all())
    return HttpResponse(payload, 'application/json')

def new_record(request):
    data=json.loads(request.body)
    if(Game.objects.filter(id=data["game_id"]).count() == 1):
        new_record = Record(
            game_id=data["game_id"], completion_time_seconds=data["completion_time_seconds"],
        )
        new_record.save()
        return JsonResponse({"save": new_record.pk != None })
    else:
        return HttpResponse(status=404)
