FROM anexia/angular-skeleton-base
MAINTAINER Harald Nezbeda <HNezbeda@anexia-it.com>

RUN sed -i 's/deb.debian.org/archive.debian.org/g' /etc/apt/sources.list \
    && sed -i '/jessie-updates/d' /etc/apt/sources.list
	
RUN apt-get update && apt-get install -y \
    dos2unix
	
RUN npm install -g yarn@latest

# Install entrypoint scripts
COPY docker-node-entrypoint /usr/local/bin/
RUN dos2unix /usr/local/bin/docker-node-entrypoint && \
    chmod a+x /usr/local/bin/docker-node-entrypoint

WORKDIR /app
ENTRYPOINT [ "/bin/bash", "/usr/local/bin/docker-node-entrypoint" ]
