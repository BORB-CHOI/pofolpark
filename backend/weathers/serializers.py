from rest_framework import serializers
from .models import Weather


class AllWeatherSerializer(serializers.Serializer):
    class Meta:
        model = Weather
        fields = (
            "key",
            "country_code",
            "country_localized_name",
            "localized_name",
            "temperature_value",
        )
