# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=12
# https://github.com/Yelp/dumb-init/releases
ARG DUMB_INIT_VERSION=1.2.2

# Build container
FROM node:${NODE_VERSION}-alpine
ARG DUMB_INIT_VERSION

WORKDIR /home/node

ADD . /home/node

RUN wget -O dumb-init -q https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 \
    && chmod +x dumb-init \
    && yarn --frozen-lockfile \
    && yarn build \
    && yarn cache clean \
    && ls -lah

EXPOSE 3000

CMD ["./dumb-init", "yarn", "start"]
