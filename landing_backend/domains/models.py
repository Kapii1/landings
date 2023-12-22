from django.db import models

# Create your models here.
class BaseDomain(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class ClientDomain(BaseDomain):
    # Your specific fields go here
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

class BasePage(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    domain = models.ForeignKey(ClientDomain, on_delete=models.DO_NOTHING)
    
    class Meta:
        abstract = True

class BaseConfig(models.Model):
    pass

class StaticPageConfig(BaseConfig):
    pass

class DynamicPageConfig(BaseConfig):
    pass

class StaticPage(BasePage):
    config = models.OneToOneField(StaticPageConfig, on_delete=models.CASCADE)
    domain = models.ForeignKey(ClientDomain,on_delete=models.DO_NOTHING)
    
    def __str__(self):
        return self.title

class DynamicPage(BasePage):
    config = models.OneToOneField(DynamicPageConfig, on_delete=models.CASCADE)
    domain = models.ForeignKey(ClientDomain,on_delete=models.DO_NOTHING)
    
    def __str__(self):
        return self.title 
