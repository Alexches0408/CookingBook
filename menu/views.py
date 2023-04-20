from django.shortcuts import render
from django.views.generic import ListView, CreateView
from .models import Product, Dishe
from .forms import AddDisheForm
# Create your views here.

class ProductList(ListView):
    model = Dishe
    template_name = 'menu/dishes.html'
    context_object_name = 'dishes'

class CreateDish(CreateView):
    template_name = 'menu/add_dish.html'
    form_class = AddDisheForm


