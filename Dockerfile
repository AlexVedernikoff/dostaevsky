FROM node:16-alpine as builder

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --only=prod

COPY . /app

RUN npm start
