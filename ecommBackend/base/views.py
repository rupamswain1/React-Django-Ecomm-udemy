from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User; 
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from .serializer import ProductSerializer,UserSerializer, UserSerializerWithToken;

from django.contrib.auth.hashers import make_password
from .models import Product
from rest_framework import status

# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data=super().validate(attrs)
        
        serializer=UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v

        #data['message']='Buddy'

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getResponse(request):
    routes=[
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>',
        '/api/products/<update>/<id>/',
    ]
    return Response(routes)
@api_view(['GET'])
def getProducts(request):
    products=Product.objects.all()
    seralizers=ProductSerializer(products,many=True)
    return Response(seralizers.data)

@api_view(['GET'])
def getProductById(request,prodId):
    product=Product.objects.get(_id=prodId)
    serializer=ProductSerializer(product,many=False)
    #print(serializer.data)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data=request.data
    print(data)
    try:
        user=User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer=UserSerializerWithToken(user,many=False)
        return Response(serializer.data)
    finally:
        pass

   # except:
    #    message={'detail':'User with this email already exist'}
     #   return Response(message,status=status.HTTP_400_BAD_REQUEST )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user=request.user
    serializer=UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    user=User.objects.all()
    serializer=UserSerializer(user,many=True)
    return Response(serializer.data)