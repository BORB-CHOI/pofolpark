from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.Weathers.as_view()),

]
