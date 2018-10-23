FROM gitlab.anx.local:4567/anexia-developme/skeleton-angular/node_base
MAINTAINER Harald Nezbeda <HNezbeda@anexia-it.com>

RUN apt-get update && apt-get install -y \
    dos2unix

# Install entrypoint scripts
COPY docker-node-entrypoint /usr/local/bin/
RUN dos2unix /usr/local/bin/docker-node-entrypoint && \
    chmod a+x /usr/local/bin/docker-node-entrypoint

WORKDIR /app/src
ENTRYPOINT [ "/bin/bash", "/usr/local/bin/docker-node-entrypoint" ]
