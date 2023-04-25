from django.forms import *
from .models import Dishe, ProductDishe, Product

class AddDisheForm(ModelForm):



    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["name"].widget.attrs.update({"id":"name"})
        self.fields["number_of_person"].widget.attrs.update({"id":"number_of_person"})
        self.fields["steps"].widget.attrs.update({"id":"steps"})
        self.list_products = Product.objects.values_list("name", flat=True)

    class Meta:
        model = Dishe
        fields = ['name', 'products', 'number_of_person', 'steps']
        widgets ={
            "products": SelectMultiple(attrs = {"Class":"products", "id":"products", }),
        }
