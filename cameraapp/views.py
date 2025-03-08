from django.shortcuts import render
from django.http import HttpResponse 
# Create your views here.


# views.py


from .models import Camera

def camera_list(request):
    cameras = Camera.objects.all()
    return render(request, 'index.html', {'cameras': cameras})


