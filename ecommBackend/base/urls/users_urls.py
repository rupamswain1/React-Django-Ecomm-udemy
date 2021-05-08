from django.urls import path
from ..views import users_views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns=[
    path('login/', users_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/',users_views.registerUser, name='register user'),
    
    path('',users_views.getUsers, name='get Users'),
    path('profile/',users_views.getUserProfile, name='users-profle'),
   

]