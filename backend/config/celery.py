import os
from celery import Celery
from django.conf import settings


# 'celery' 프로그램을 위한 기본 Django 설정 모듈을 설정합니다.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

# Celery 인스턴스를 생성합니다.
app = Celery("config")

# 모든 설치된 앱에서 작업 모듈을 로드합니다.
app.config_from_object("django.conf:settings", namespace="CELERY")

# 모든 설치된 앱에서 작업을 자동으로 발견합니다.
app.autodiscover_tasks()

# django-celery 패키지의 setup_loader() 함수 호출
# setup_loader()
