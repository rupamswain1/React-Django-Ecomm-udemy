from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns=[
     path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('',views.getResponse,name='routes'),
    path('products/',views.getProducts, name='products'),
    path('products/<str:prodId>/',views.getProductById,name="GetProductsById"),

]