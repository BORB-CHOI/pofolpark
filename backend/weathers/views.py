from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class Weathers(APIView):
    def get(self, req):
        try:
            return Response(
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    "message": {e}
                },
            )


class WeatherDetail(APIView):
    pass
