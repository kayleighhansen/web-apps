from django.shortcuts import render

import requests

def index(request):
    return render(request, 'call_it_in/home.html')
    

def home(request):
    return render(request, 'call_it_in/home-template.html')
# Create your views here.
