from django.shortcuts import render
import requests

def index(request):
    return render(request, 'home.html')
    

def home(request):
    return render(request, 'home-template.html')
