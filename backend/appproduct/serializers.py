from rest_framework import serializers
from .models import Product, Category
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')
        # extra_kwargs = {'password':{'write_only':True, 'required':True}}

        def create(self, validated_data):
            user=User.objects.create_user(**validated_data)
            Token.objects.create(user=user)
            return user
            print(token.key)

