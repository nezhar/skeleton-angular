FROM anexia/angular-skeleton-base
MAINTAINER Harald Nezbeda <HNezbeda@anexia-it.com>

# Install entrypoint scripts
COPY docker-node-entrypoint /usr/local/bin/
RUN dos2unix /usr/local/bin/docker-node-entrypoint && \
    chmod a+x /usr/local/bin/docker-node-entrypoint

WORKDIR /app
ENTRYPOINT [ "/bin/bash", "/usr/local/bin/docker-node-entrypoint" ]
