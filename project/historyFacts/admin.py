from django.contrib import admin

# Register your models here.

from django.contrib import admin

from .models import Years
admin.site.register(Years)

from .models import Events
admin.site.register(Events)
