
from rest_framework.response import Response
from ..serializer import ProductSerializer;

from django.contrib.auth.hashers import make_password
from ..models import Product
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes

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

