FROM node:alpine
WORKDIR /usr/src/app
RUN npm init -y && npm install express cors
COPY . .
EXPOSE 8080
CMD [ "node", "backend.js" ]