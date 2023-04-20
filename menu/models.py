from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=120, unique=True)

    def __str__(self):
        return f'{self.name}'

class Dishe(models.Model):
    name = models.CharField(max_length=120, unique=True)
    products = models.ManyToManyField(Product, through='ProductDishe')
    number_of_person = models.IntegerField(default=1)
    steps = models.TextField()

    def __str__(self):
        return f'{self.name}'


class ProductDishe(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    dishe = models.ForeignKey(Dishe, on_delete=models.CASCADE)
    amount = models.IntegerField(default=1)
    thing = 'th'
    cup = 'cup'
    gram = 'gr'
    UM = [
        (thing, 'штук'),
        (cup, 'стакан'),
        (gram, 'грамм')
    ]
    measure = models.CharField(max_length=3, choices=UM, default=thing)
