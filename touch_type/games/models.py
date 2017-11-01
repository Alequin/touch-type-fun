# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Game(models.Model):

    STANDARD = "standard"
    ENDLESS = "endless"
    WHACK_A_MOLE = "whack-a-mole"
    TYPE = (
        (STANDARD, "Standard"),
        (ENDLESS, "Endless"),
        (WHACK_A_MOLE, "Whack-a-mole"),
    )

    SIMPLE = "simple"
    EASY = "easy"
    MEDIUM = "medium"
    HARD = "hard"
    EXTREME = "extreme"
    DIFFICULTY = (
        (SIMPLE, "Simple"),
        (EASY, "Easy"),
        (MEDIUM, "Medium"),
        (HARD, "Hard"),
        (EXTREME, "Extreme"),
    )

    title = models.CharField(max_length=63)
    description = models.CharField(max_length=255)
    body = models.TextField()
    type = models.CharField(max_length=12, choices=TYPE, default=STANDARD)
    difficulty = models.CharField(max_length=7, choices=DIFFICULTY, default=SIMPLE)

    def __str__(self):
        return self.title

class Record(models.Model):
    time_in_seconds = models.PositiveIntegerField()
    game = models.ForeignKey(Game, related_name="game")

    def __str__(self):
        return str(self.game) + ": " + str(self.time_in_seconds)
