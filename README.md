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
```bash
docker build . -t <dockerhub_username>/nodejs-web
```

## Run Docker Image (Create Container)
```bash
docker run --rm --name nodejs-web-container -p 30001:30001 <dockerhub_username>/nodejs-web:latest
```

## Login to Dockerhub
```bash
docker login --username=<dockerhub_username>
```

## Push Image to Dockerhub
```bash
docker push <dockerhub_username>/nodejs-web
```

## Deploy Docker Image from Dockerhub to Kubernetes Cluster
```bash
kubectl apply -f k8s-deployment.yml
```

## Access Kubernetes Service from Browser
```bash
minikube service nodejs-web-service
```