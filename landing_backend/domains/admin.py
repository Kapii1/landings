from django.contrib import admin

from domains.models import ClientDomain, DynamicPage

# Register your models here.
admin.site.register(ClientDomain)
admin.site.register(DynamicPage)