# NODE.JS WEB

## Installation
```bash
npm install
```

## Run
```bash
npm run start
```

## Build Docker Image
docker build . -t <\dockerhub_username>/nodejs-web

## Run Docker Image (Create Container)
docker run --rm --name nodejs-web-container -p 30001:30001 <\dockerhub_username>/nodejs-web:latest