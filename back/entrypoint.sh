#!/bin/sh
set -e

echo "👉 DB_HOST=$DB_HOST, DB_PORT=$DB_PORT"
echo "⌛ Așteptăm să fie gata baza de date..."

./wait-for-it.sh "$DB_HOST:$DB_PORT" --timeout=120 --strict -- echo "✅ Baza de date este gata."

echo "📦 Aplicăm migrațiile..."
python manage.py makemigrations
python manage.py migrate

echo "🚀 Pornim Gunicorn..."
gunicorn --bind 0.0.0.0:8000 aware_back.wsgi:application
