from django.db import models
from common.models import CommonModel


# Create your models here.
class Weather(CommonModel):
    key = models.PositiveIntegerField(unique=True)
    country_code = models.CharField(max_length=5)
    country_localized_name = models.CharField(max_length=200)
    localized_name = models.CharField(max_length=200)
    temperature_value = models.FloatField(max_length=20)
    latitude = models.FloatField(max_length=20)
    longitude = models.FloatField(max_length=20)

    def __str__(weather) -> str:
        return f"{weather.country_localized_name} | {weather.localized_name}"
