from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.Weathers.as_view()),
    path("<int:pk>", views.WeatherDetail.as_view()),
]
