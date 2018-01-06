FROM node:8.9.1-alpine

WORKDIR /app

RUN apt-get update -y && apt-get upgrade -y

USER node

COPY ./package.json /app

RUN npm install

CMD yarn dev
