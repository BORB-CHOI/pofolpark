from django.contrib import admin
from .models import Weather

# Register your models here.


@admin.register(Weather)
class WeatherAdmin(admin.ModelAdmin):
    list_display = (
        "key",
        "country_code",
        "country_localized_name",
        "localized_name",
        "temperature_value",
    )
