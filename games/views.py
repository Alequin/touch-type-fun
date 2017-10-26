# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.views import View

class GameView():
    def get(self, request):
        return HttpResponse('result')
