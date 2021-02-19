from django.http import HttpResponse, JsonResponse
from .models import Sources

#testing the backend

def helloWorld(request):
    
    return HttpResponse("Hello World!")

