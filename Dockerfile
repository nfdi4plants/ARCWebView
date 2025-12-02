# Build stage
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:docker

# Serve stage (using nginx)
FROM nginx:stable
COPY --from=build /app/dist /usr/share/nginx/html