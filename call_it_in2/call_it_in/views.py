from django.shortcuts import render

from django.shortcuts import render

import requests

def index(request):
    return render(request, 'call_it_in/home.html')
    
def home(request):
    return render(request, 'call_it_in/home-template.html')

def doctor(request):
    return render(request, 'call_it_in/doctors-note.html')

def excuses(request):
    return render(request, 'call_it_in/excuses.html')

def cars(request):
    return render(request, 'call_it_in/broken-cars.html')