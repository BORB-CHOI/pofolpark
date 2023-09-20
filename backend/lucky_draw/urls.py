from django.urls import path
from . import views

urlpatterns = [
    path("", views.YoutubeVideos.as_view()),
]
