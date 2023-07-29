import requests
import environ
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import (
    NotFound,
)
from . import serializers
from .models import Weather

env = environ.Env()


class Weathers(APIView):
    def get(self, request):
        try:
            all_weathers = Weather.objects.all()
            serializer = serializers.AllWeatherSerializer(
                all_weathers,
            )

            return Response(
                data=serializer.data,
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response(
                print(e),
                data={"message": "Invalid weathers data."},
                status=status.HTTP_400_BAD_REQUEST,
            )


class WeatherDetail(APIView):
    def get_object(self, pk):
        try:
            return Weather.objects.get(key=pk)
        except Weather.DoesNotExist:
            raise NotFound

    def get_weather_data(self, latitude, longitude):
        # Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        api_key = env("OPEN_WEATHER_API_KEY")
        url = f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={api_key}"
        response = requests.get(url)

        if response.status_code == 200:
            return response.json()
        else:
            response.raise_for_status()

    def get(self, request, pk):
        try:
            weather = self.get_object(pk)

            # Assuming your Weather model has 'latitude' and 'longitude' fields
            latitude = weather.latitude
            longitude = weather.longitude

            # Call the weather API using latitude and longitude
            weather_data = self.get_weather_data(latitude, longitude)

            return Response(
                data=weather_data,
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            print(e)
            return Response(
                data={"message": "Error getting weather data."},
                status=status.HTTP_400_BAD_REQUEST,
            )
