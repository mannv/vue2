FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY ./deploy/nginx.conf /etc/nginx/nginx.conf