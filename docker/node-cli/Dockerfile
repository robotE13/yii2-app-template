FROM node:13-alpine

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
  yarn global add webpack webpack-cli prettier && \
  yarn config set bin-links false

ENTRYPOINT ["/bin/sh", "-c"]
