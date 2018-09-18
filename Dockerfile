FROM node:10.7.0
WORKDIR /usr/src/statistics
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]