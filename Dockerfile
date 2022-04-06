FROM node:17-alpine

LABEL org.opencontainers.image.source=https://github.com/eces/select

WORKDIR /app

RUN yarn add selectfromuser@1.1.29

CMD npx slt