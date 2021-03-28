from django.http import HttpResponse, JsonResponse
from .models import Sources
import json
from .serializers import SourceSerializer
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

#testing the backend

def helloWorld(request):
    
    return HttpResponse("Hello World!")

@api_view(['POST'])
def create_source(request):
    print(request.data)
    serializer = SourceSerializer(data=request.data)

    if serializer.is_valid():
        source = serializer.save()
        return JsonResponse(
            {
                "id" : source.id
            }
        )
    else:
        return JsonResponse(serializer.errors, status=400)

@api_view(['GET'])
def get_source(request, id):
    source = Sources.objects.get(id=id)
    serializer = SourceSerializer(source)

    return JsonResponse(serializer.data)

@api_view(['PUT'])
def update_source(request, id):
    source = Sources.objects.get(id=id)
    serializer = SourceSerializer(source, data = request.data)

    if serializer.is_valid():
        updated_source = serializer.save()
        return JsonResponse(
            {
                "id" : updated_source.id
            }
        )
    else:
        return JsonResponse(serializer.errors, status=400)

@api_view(['DELETE'])
def delete_source(request, id):
    source = Sources.objects.get(id=id)
    source.delete()

    return JsonResponse(
        {
            "id" : id
        }
    )

@api_view(['GET'])
def all_sources(request):
    sources = Sources.objects.all()
    serializer = SourceSerializer(sources, many=True)

    return JsonResponse(serializer.data, safe=False)