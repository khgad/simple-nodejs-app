FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY app.js .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]