FROM node:16.16.0
WORKDIR /usr/skyeng-vite-docker
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build