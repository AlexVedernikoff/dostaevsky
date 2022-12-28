FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.22-alpine as nginx

COPY --from=builder /app/build /usr/share/nginx/html/operator 
COPY --from=builder /app/index_root.html /usr/share/nginx/html/index.html 

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf