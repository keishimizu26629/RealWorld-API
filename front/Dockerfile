FROM node:20.12.2-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000
