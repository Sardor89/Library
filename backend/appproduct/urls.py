from rest_framework import routers
from .views import ProductViewSet, UserViewSet, DownloadPDF, CategoryViewSet
from django.urls import path, include
router = routers.DefaultRouter()
router.register('product', ProductViewSet, basename='product')
router.register('user', UserViewSet, basename='user')
router.register('category', CategoryViewSet, basename='category')


urlpatterns=[
    path('download/', DownloadPDF, name='download_pdf'),
    path('', include(router.urls))
]
