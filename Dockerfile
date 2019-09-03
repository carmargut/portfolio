FROM node:4.6
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 443 80
CMD npm start
