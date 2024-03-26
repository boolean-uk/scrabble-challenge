FROM node:21
COPY . /app
WORKDIR /app
RUN ["npm", "ci"]
RUN ["npm", "run", "test"]
