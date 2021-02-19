from django.db import models

class Sources(models.Model):
    name = models.CharField(max_length=30)
    organization = models.TextField()
    phones = models.TextField()
    emails = models.CharField(max_length=30)
    notes = models.TextField()