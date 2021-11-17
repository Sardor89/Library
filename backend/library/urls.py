from rest_framework.urls import path
from .views import LibraryList, LibraryDetail, LibraryCategoryList, LibraryCategoryRetrieve

urlpatterns = [
    path('<int:pk>/', LibraryDetail.as_view()),
    path('', LibraryList.as_view()),
    path('category/', LibraryCategoryList.as_view()),
    path('category/', LibraryCategoryList.as_view()),
    path('category/<int:pk>/', LibraryCategoryRetrieve.as_view()),
]