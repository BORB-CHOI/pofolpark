from rest_framework import serializers
from .models import Weather


class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = (
            "key",
            "country_code",
            "country_localized_name",
            "localized_name",
            "temperature_value",
        )
