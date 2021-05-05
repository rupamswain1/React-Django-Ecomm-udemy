from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User; 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import ProductSerializer,UserSerializer, UserSerializerWithToken;
from .models import Product

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

@api_view(['GET'])
def getUserProfile(request):
    user=request.user
    serializer=UserSerializer(user, many=False)
    return Response(serializer.data)