import os
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class YoutubeVideos(APIView):
    def get(self, request):
        try:
            api_key = os.getenv("YOUTUBE_API_KEY")
            url = f"https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCCU2H8fnVx20POKCzFm-G5Q&maxResults=50&type=video&videoDuration=medium&order=date&videoEmbeddable=true&key={api_key}"

            response = requests.get(url)
            items = response.json().get("items")

            if items is None:
                error_message = response.json().get("error").get("message")
                raise Exception(error_message)

            # next_page_token = response.json().get("nextPageToken")

            # while next_page_token:
            #     response = requests.get(url + "&pageToken=" + next_page_token)
            #     items += response.json().get("items")
            #     next_page_token = response.json().get("nextPageToken")

            return Response(
                status=status.HTTP_200_OK,
                data=items,
            )

        except Exception as e:
            print(e)
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"message": "뭔가가 잘못됐다. 지금 당장 개발자 불러!!"},
            )
