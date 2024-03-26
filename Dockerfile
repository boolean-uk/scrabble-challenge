FROM node:18

COPY . /app

WORKDIR /app

RUN ["npm", "ci"]
RUN ["npm", "run", "test"]