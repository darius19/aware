FROM python:3.11-slim

# Setăm folderul de lucru
WORKDIR /app

# Instalăm pachetele necesare
RUN apt-get update && apt-get install -y \
    gcc \
    netcat-openbsd \
    default-libmysqlclient-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Copiem requirements și le instalăm
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiem codul aplicației
COPY . .

# Copiem și dăm permisiuni scripturilor
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Pornim aplicația cu entrypoint-ul
ENTRYPOINT ["/entrypoint.sh"]


