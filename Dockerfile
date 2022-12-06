FROM node:19-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
WORKDIR /root
FROM nginx:alpine
COPY --from=node /app/build /usr/share/nginx/html
COPY /custom-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80