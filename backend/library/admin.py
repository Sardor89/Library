from django.contrib import admin
from .models import LibraryCategory, Library

# Register your models here.

admin.site.register(Library)
admin.site.register(LibraryCategory)
