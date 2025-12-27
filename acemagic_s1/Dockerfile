FROM ghcr.io/home-assistant/amd64-base-debian:bookworm

WORKDIR /app

# Установка зависимостей (Node.js, libusb, шрифты для canvas, cairo/pango/jpeg для рендеринга)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        nodejs \
        npm \
        libusb-1.0-0-dev \
        fonts-liberation \
        fonts-dejavu \
        fonts-freefont-ttf \
        libcairo2-dev \
        libpango1.0-dev \
        libjpeg-dev \
        libgif-dev \
        build-essential && \
    rm -rf /var/lib/apt/lists/*

# Копирование s1panel
COPY s1panel /app

# Установка npm-зависимостей
RUN npm install
RUN cd gui && npm install && npm run build

# Если есть gui, собрать (опционально)
RUN if [ -d "gui" ]; then cd gui && npm install && npm run build; fi

EXPOSE 8686

CMD ["node", "main.js"]
