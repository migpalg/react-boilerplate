FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install --frozen-lockfile
COPY ./public ./public
COPY ./src ./src

RUN yarn build

FROM nginx:alpine AS server
COPY --from=builder ./app/build usr/share/nginx/html
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
