# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Game(models.Model):

    SIMPLE = 'SMP'
    EASY = 'ESY'
    MEDIUM = 'MDM'
    HARD = 'HRD'
    EXTREME = 'EXE'
    DIFFICULTY = (
        (SIMPLE, 'Simple'),
        (EASY, 'Easy'),
        (MEDIUM, 'Medium'),
        (HARD, 'Hard'),
        (EXTREME, 'Extreme'),
    )

    title = models.CharField(max_length=255)
    body = models.TextField()
    time_limit_seconds = models.PositiveIntegerField()
    difficulty = models.CharField(max_length=7, choices=DIFFICULTY)

class Record(models.Model):
    game = models.ForeignKey(Game, related_name='game')
    completion_time_seconds = models.PositiveIntegerField()
