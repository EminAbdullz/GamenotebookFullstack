# Используем официальный образ Node.js
FROM node:18

# Создаём рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь код проекта
COPY . .

# Открываем порт для NestJS
EXPOSE 3000

# Запускаем сервер
CMD ["npm", "run", "start"]
