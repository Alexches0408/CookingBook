from django.urls import path
from .views import ProductList, CreateDish

app_name = 'menu'

urlpatterns = [
    path('', ProductList.as_view(), name='dishes'),
    path('add/', CreateDish.as_view(), name='add_dish'),
]