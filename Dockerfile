FROM node:12-alpine
WORKDIR /usr/src/app
 COPY package*.json ./
 RUN npm install 
#  RUN npm install -g pm2 
 # Bundle app source
COPY . .
 EXPOSE 30001
 RUN npm install
CMD [ "node","build/App.js" ]