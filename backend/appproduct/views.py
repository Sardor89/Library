from rest_framework import viewsets
from .models import Product, Category
from .serializers import ProductSerializer, UserSerializer, CategorySerializer
from django.contrib.auth.models import User


from django.core.files import File
from django.http import HttpResponse
from rest_framework.decorators import api_view
from projectproduct.settings import BASE_DIR, MEDIA_ROOT


@api_view(['GET'])
def DownloadPDF(self):
    path_to_file = MEDIA_ROOT + '/filename.pdf'
    f = open(path_to_file, 'rb')
    pdfFile = File(f)
    response = HttpResponse(pdfFile.read())
    response['Content-Disposition'] = 'attachment'
    return response


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer


