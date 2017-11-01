# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Game, Record

class GameAdmin(admin.ModelAdmin):
    list_display = ('title',)

admin.site.register(Game, GameAdmin)

class RecordAdmin(admin.ModelAdmin):
    list_display = ('game', 'time_in_seconds')

admin.site.register(Record, RecordAdmin)
