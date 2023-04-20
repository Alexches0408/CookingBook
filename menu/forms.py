from django.forms import ModelForm
from .models import Dishe

class AddDisheForm(ModelForm):

    class Meta:
        model = Dishe
        fields = ['name', 'products', 'number_of_person', 'steps']
