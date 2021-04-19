from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import ProductSerializer;
from .models import Product

# Create your views here.

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
    product=Product.objects.filter(_id=prodId)
    serializer=ProductSerializer(product,many=False)
    return Response(serializer.data)