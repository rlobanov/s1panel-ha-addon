FROM ghcr.io/home-assistant/amd64-base-debian:bookworm

WORKDIR /app

# Установка системных зависимостей (Node.js уже в базовом образе HA, но добавляем необходимые библиотеки)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        npm \
        libusb-1.0-0-dev \
        fonts-liberation \
        fonts-dejavu \
        fonts-freefont-ttf \
        libcairo2-dev \
        libpango1.0-dev \
        libjpeg-dev \
        libgif-dev \
        build-essential \
    rm -rf /var/lib/apt/lists/*

# Копирование кода приложения
COPY s1panel /app

# Установка npm-зависимостей для основного приложения
RUN npm install

# Сборка GUI, если директория существует (Vite build выводит в gui/dist)
RUN if [ -d "gui" ]; then \
        cd gui && \
        npm install && \
        npm run build; \
    fi

EXPOSE 8686

CMD ["node", "main.js"]
