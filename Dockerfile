#Primera Etapa
FROM node:16-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ARG CACHEBUST=1

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step /app/dist/RPI.home /usr/share/nginx/html