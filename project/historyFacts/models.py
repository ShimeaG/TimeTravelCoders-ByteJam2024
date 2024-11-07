from django.db import models
import datetime


# Create your models here.
class Years(models.Model):
    year_id = models.IntegerField(primary_key="true", default=00)
    event_year = models.IntegerField(default=2024)


class Events(models.Model):
    def __str__(self):
        return self.event_title
    event_id = models.IntegerField(primary_key="true", default=00)
    year_id = models.ForeignKey(Years, on_delete=models.CASCADE, default=00)
    event_title = models.TextField(default="New Historical Event", max_length=20)
    event_desc = models.TextField(default="New event in history", max_length=300)
    event_image_url = models.TextField(max_length=30)
