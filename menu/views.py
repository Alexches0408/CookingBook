from django.shortcuts import render
from django.views.generic import ListView, CreateView
from .models import Product, Dishe, ProductDishe
from .forms import AddDisheForm
# Create your views here.

class ProductList(ListView):
    model = Dishe
    template_name = 'menu/dishes.html'
    context_object_name = 'dishes'


class CreateDish(CreateView):
    model = Dishe
    template_name = 'menu/add_dish.html'
    form_class = AddDisheForm

    def post(self, request, *args, **kwargs):
        # берём значения для нового товара из POST-запроса отправленного на сервер
        form = self.form_class(request.POST) # создаём новую форму, забиваем в неё данные из POST-запроса 

 
        if form.is_valid(): # если пользователь ввёл всё правильно и нигде не накосячил, то сохраняем новый товар
            form.save()
 
        return super().get(request, *args, **kwargs)
