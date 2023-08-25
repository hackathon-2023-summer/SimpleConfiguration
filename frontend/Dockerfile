FROM node:alpine
WORKDIR /usr/src/app
RUN npm init -y && npm install express
COPY . .
EXPOSE 3000
CMD [ "node", "frontend.js" ]