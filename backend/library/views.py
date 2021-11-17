from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.serializers import Serializer
from .models import Library, LibraryCategory
from .serializers import LibrarySerializer, LibraryCategorySerializer

# Create your views here.

class LibraryList(ListAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer


class LibraryDetail(RetrieveAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer

class LibraryCategoryList(ListAPIView):
    queryset = LibraryCategory.objects.all()
    serializer_class = LibraryCategorySerializer

class LibraryCategoryRetrieve(RetrieveAPIView):
    queryset = LibraryCategory.objects.all()
    serializer_class = LibraryCategorySerializer