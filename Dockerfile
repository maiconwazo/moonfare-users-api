FROM node:bullseye
 
WORKDIR /user/src/app
COPY . .
RUN npm ci --omit=dev
RUN npm run build
RUN apk update && apk add bash
