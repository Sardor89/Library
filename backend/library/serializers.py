from django.db.models import fields
from rest_framework import serializers, pagination
from .models import LibraryCategory, Library

class LibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model=Library
        fields = '__all__'

class LibraryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = LibraryCategory
        fields = '__all__'