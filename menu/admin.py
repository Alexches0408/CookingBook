from django.contrib import admin
from .models import Product, Dishe, ProductDishe

admin.site.register(Product)
admin.site.register(Dishe)
admin.site.register(ProductDishe)

# Register your models here.
