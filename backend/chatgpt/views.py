import os
import openai
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class Chatgpt(APIView):
    def post(self, request):
        try:
            condition = request.data["condition"]
            todo = request.data["todo"]

            print(condition, todo)

            openai.api_key = os.getenv("OPENAI_API_KEY")

            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                temperature=0.9,
                messages=[
                    {
                        "role": "system",
                        "content": """
                            You're a goal generator. From now on, You must motivate people!

                            ___________
                            Let's take a look at the saying, "Mom makes gold."
                            If this was "gold" again it wouldn't have motivated me at all.
                            Even if it's the same gold medal, the gold medal won through childbirth and childcare
                            Compared to the gold medal that allowed me to focus on pre-wedding practice
                            That is a much more difficult goal.
                            But she secretes dopamine
                            That actually led to good results.
                            ___________

                            From now on, we will talk about 'conditions' and 'to-do', so please synthesize 'to-do' that fits the proverb in the above article.

                            ___________
                            Condition: I'm not motivated and lethargic today | To do: Getting a perfect score on the test

                            'Special to do:' Even though lethargic,Nevertheless I get perfect scores on the test | Description: In a lethargic mood, others will just go to bed and lie down. Nevertheless, what you did is that you did something very special.
                            ___________

                            Please answer as above. 'Special to do:', '|', 'Description:' must contain these three. Don't forget that your 'special goal' should feel like 'Nevertheless'. Even if it's the same goal, you have to make it feel different.

                            'Special to do' should be made by combining 'condition' and 'to do'.

                            'condition' can be represented in any way as long as it is relevant.

                            Please answer into Korean. It can be an honorific in the form of '~합니다' or '~입니다'. The word "그럼에도 불구하고" should be included.
                        """,
                    },
                    {
                        "role": "user",
                        "content": f"condition : {condition} | todo : {todo}",
                    },
                ],
            )

            return Response(
                status=status.HTTP_200_OK,
                data={"message": completion.choices[0].message},
            )
        except Exception as e:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    "message": "Rate limit reached on requests per min. Please try again in 20s. Contact us through our help center at help.openai.com if you continue to have issues."
                },
            )
