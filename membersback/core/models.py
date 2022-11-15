from unittest.util import _MAX_LENGTH
from django.db import models

class Member(models.Model):
    name = models.CharField(max_length =100)
    surname = models.CharField(max_length=100)
    email = models.EmailField()
    photo = models.ImageField(upload_to='members_profile')

    def __str__(self):
        return self.name