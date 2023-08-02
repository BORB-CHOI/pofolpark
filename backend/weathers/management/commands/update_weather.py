import environ
import requests
import datetime
from django.core.management.base import BaseCommand
from weathers import models
from celery import Celery

NAME = "weathers"


env = environ.Env()

API_URL = "https://dataservice.accuweather.com/currentconditions/v1/topcities/150"  # Replace with the actual API URL
LANGUAGE = "ko-kr"


class Command(BaseCommand):
    help = "Update weather data in the database."

    def handle(self, *args, **options):
        try:
            # Fetch data from the API
            response = requests.get(
                f'{API_URL}?apikey={env("ACCU_WEATHER_API_KEY")}&language={LANGUAGE}'
            )
            data = response.json()

            # Update the database with the fetched data
            for item in data:
                key = item["Key"]
                country_code = item["Country"]["ID"]
                country_localized_name = item["Country"]["LocalizedName"]
                localized_name = item["LocalizedName"]
                temperature_value = item["Temperature"]["Metric"]["Value"]
                latitude = item["GeoPosition"]["Latitude"]
                longitude = item["GeoPosition"]["Longitude"]

                models.Weather.objects.update_or_create(
                    key=key,
                    defaults={
                        "country_code": country_code,
                        "country_localized_name": country_localized_name,
                        "localized_name": localized_name,
                        "temperature_value": temperature_value,
                        "latitude": latitude,
                        "longitude": longitude,
                    },
                )

            current_time = datetime.datetime.now()
            formatted_time = current_time.strftime("%y-%m-%d %H:%M:%S")
            message = "Weather data updated successfully."

            self.stdout.write(self.style.SUCCESS(f"{formatted_time} | {message}"))
        except Exception as e:
            print(e)
            self.stdout.write(self.style.ERROR("Error updating weather data."))


# @Celery.task(name="update_weather")
# def update_weather_task():
#     try:
#         # Fetch data from the API
#         response = requests.get(
#             f'{API_URL}?apikey={env("ACCU_WEATHER_API_KEY")}&language={LANGUAGE}'
#         )
#         data = response.json()

#         # Update the database with the fetched data
#         for item in data:
#             key = item["Key"]
#             country_code = item["Country"]["ID"]
#             country_localized_name = item["Country"]["LocalizedName"]
#             localized_name = item["LocalizedName"]
#             temperature_value = item["Temperature"]["Metric"]["Value"]
#             latitude = item["GeoPosition"]["Latitude"]
#             longitude = item["GeoPosition"]["Longitude"]

#             models.Weather.objects.update_or_create(
#                 key=key,
#                 defaults={
#                     "country_code": country_code,
#                     "country_localized_name": country_localized_name,
#                     "localized_name": localized_name,
#                     "temperature_value": temperature_value,
#                     "latitude": latitude,
#                     "longitude": longitude,
#                 },
#             )

#     except Exception as e:
#         print(e)


# def handle(self, *args, **options):
#     update_weather_task.delay()
