# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.views import View

def respond_with_json(payload):
    return HttpResponse(payload, content_type="application/json")

class GameView(View):
    def get(self, request):
        return respond_with_json("result")
