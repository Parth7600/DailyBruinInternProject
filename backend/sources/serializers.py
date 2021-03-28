from rest_framework import serializers
from . models import Sources

class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sources
        fields = ["name", "organization", "phones", "emails", "notes", "id"]

