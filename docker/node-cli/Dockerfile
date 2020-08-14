# gulp
FROM node:12-alpine

WORKDIR /data

RUN apk add --no-cache --virtual .gyp \
      python \
      make \
      g++ \
      pkgconfig \
      autoconf \
      automake \
      libtool \
      nasm \
      build-base \
      zlib-dev && \
  yarn global add gulp && \
  yarn config set bin-links false

ENTRYPOINT ["/bin/sh", "-c"]
