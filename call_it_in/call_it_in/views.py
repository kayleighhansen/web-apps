from django.shortcuts import render
import requests

def index(request):
    """View function for home page of site."""
    #response = requests.get()
    #data = response.json()
    #posts = data['photos']
    
    return render(request, 'home.html')
    

def home(request):
    return render(request, 'home-template.html')
