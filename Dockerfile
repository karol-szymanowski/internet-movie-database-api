FROM node:10-alpine

WORKDIR /opt/api

COPY ./package.json .
RUN yarn install

COPY . .

CMD yarn start
