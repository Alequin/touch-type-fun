# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def baseView(request):
    return render(request, 'base.html')
