FROM node:14.13.1-alpine3.10
ARG service

# TODO : Use ENV, HEALTHCHECK, builder pattern

WORKDIR /usr/src/app

# Docker layers in order of least changing first

# Install global lerna to help with bootstrapping
RUN npm install -g lerna

# Install mono repo
COPY package*.json ./
RUN npm ci --production

# Bootstrap service
COPY lerna.json .
COPY packages/foo/package*.json ./packages/foo/
COPY packages/foo/dist/ ./packages/foo/dist

RUN echo "Service : ${service}"

COPY services/${service}/api/package*.json ./services/primary/api/
COPY services/${service}/api/dist/  ./services/primary/api/dist

RUN npm run bootstrap:production \
  --scope "*/${service}" --include-dependencies

#RUN chown -R node:node packages && \
#    chown -R node:node services

#USER node

EXPOSE 3000

# Uncomment to leave docker container running
# CMD tail -f /dev/null

CMD ["node", "services/primary/api/dist/index"]

