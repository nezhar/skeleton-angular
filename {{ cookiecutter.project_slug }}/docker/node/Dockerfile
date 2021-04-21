FROM anexia/angular-skeleton-base
LABEL maintainer="HNezbeda@anexia-it.com"
WORKDIR /app

# Install entrypoint scripts
COPY docker-node-entrypoint /usr/local/bin/
RUN dos2unix /usr/local/bin/docker-node-entrypoint && \
    chmod a+x /usr/local/bin/docker-node-entrypoint

ENTRYPOINT [ "/bin/bash", "/usr/local/bin/docker-node-entrypoint" ]
