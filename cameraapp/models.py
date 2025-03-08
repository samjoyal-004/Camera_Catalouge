from django.db import models

# Create your models here.
# models.py


class Camera(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    camera_type = models.CharField(max_length=100)
    resolution = models.CharField(max_length=50)
    sensor = models.CharField(max_length=50)
    uses = models.CharField(max_length=200)

    def __str__(self):
        return self.title
