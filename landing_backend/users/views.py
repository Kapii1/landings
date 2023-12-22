from django.shortcuts import render
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.shortcuts import render, redirect

class RegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]

    # Create your views here.
def register(response):
    form= None
    if response.method == "POST":
	    form = RegisterForm(response.POST)

    if form and form.is_valid():
        form.save()
        return redirect("/home")
    else:
	    form = RegisterForm()

    return render(response, "register.html", {"form":form})