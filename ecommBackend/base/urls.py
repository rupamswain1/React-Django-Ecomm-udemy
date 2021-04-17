from django.urls import path
from . import views


urlpatterns=[
    path('',views.getResponse,name='routes'),
    path('products/',views.getProducts, name='products'),
    path('products/<str:prodId>/',views.getProductById,name="GetProductsById"),

]