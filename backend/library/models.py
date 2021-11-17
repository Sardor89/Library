from django.db import models

# Create your models here.

class LibraryCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Library(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    category = models.ForeignKey(LibraryCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.title