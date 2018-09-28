FROM gitlab.anx.local:4567/anexia-developme/skeleton-angular/node_base
MAINTAINER Harald Nezbeda <HNezbeda@anexia-it.com>

# Install entrypoint scripts
COPY docker-node-entrypoint /usr/local/bin/
RUN chmod a+x /usr/local/bin/docker-node-entrypoint

WORKDIR /app/src
ENTRYPOINT [ "/bin/bash", "/usr/local/bin/docker-node-entrypoint" ]
