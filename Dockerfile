FROM node:12-alpine
WORKDIR /usr/src/app
 COPY package.json ./
 RUN npm install 
 
COPY . .
 EXPOSE 30001
 RUN npm run tsc
CMD [ "node","build/App.js" ]