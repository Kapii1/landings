from django.contrib import admin
from django.urls import path

from domains.views import your_view

urlpatterns = [
    path('test/',your_view,name='your-view-name'),
    
]