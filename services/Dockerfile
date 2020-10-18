FROM node:14.13.1-alpine3.10 AS builder
ARG service

# TODO : Use ENV

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

# Create runtime image

FROM node:14.13.1-alpine3.10
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/packages/ ./packages
COPY --from=builder /usr/src/app/services/ ./services

RUN chown -R node:node packages && \
    chown -R node:node services

USER node

EXPOSE 3000

HEALTHCHECK --timeout=5s --interval=15s \
  CMD wget http://localhost:3000/health -O /dev/null

CMD ["node", "services/primary/api/dist/index"]

