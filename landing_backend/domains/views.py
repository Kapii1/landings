from django.http import HttpResponse
from django.shortcuts import render
from .decorators import extract_client_subdomain

def your_view(request, subdomain=None):
    # Your view logic here
    return HttpResponse(request.domain)
