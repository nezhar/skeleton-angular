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

# Install entrypoint scripts
COPY docker-node-entrypoint /usr/local/bin/
RUN chmod a+x /usr/local/bin/docker-node-entrypoint

WORKDIR /app
ENTRYPOINT [ "/bin/bash", "/usr/local/bin/docker-node-entrypoint" ]
