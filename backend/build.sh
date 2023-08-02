#!/usr/bin/env bash
# exit on error
set -o errexit


pip install --upgrade pip
pip install poetry==1.2.0
rm poetry.lock
poetry lock
python -m poetry install
pip install --force-reinstall -U setuptools
python manage.py collectstatic --no-input
python manage.py migrate


which crontab
python manage.py crontab show
python manage.py crontab add
python manage.py crontab show