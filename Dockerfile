FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm ci
COPY . .

FROM nginx
EXPOSE 80
WORKDIR '/usr/share/nginx/html'
COPY --from=builder /app .
CMD [ "npm", "run", "start" ]