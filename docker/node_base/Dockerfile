FROM node:10
MAINTAINER Harald Nezbeda <HNezbeda@anexia-it.com>

# Install system applications and libraries
RUN apt-get update && \
    apt-get install -y \
        curl \
        gettext \
        git \
        sudo \
        wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install node modules
RUN npm install --global --unsafe-perm \
        @angular/cli \
        typescript \
        babel-preset-env \
        node-sass \
        posthtml \
        posthtml-include \
        posthtml-img-autosize \
        postcss-modules \
        autoprefixer

WORKDIR /app
