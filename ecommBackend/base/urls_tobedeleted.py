from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns=[
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/',views.registerUser, name='register user'),
    path('',views.getResponse,name='routes'),
    path('products/',views.getProducts, name='products'),
    path('users/',views.getUsers, name='get Users'),
    path('users/profile/',views.getUserProfile, name='users-profle'),
   
    path('products/<str:prodId>/',views.getProductById,name="GetProductsById"),

]