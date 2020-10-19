FROM node:14.13.1-alpine3.10 AS builder

# Parameterise service so that Dockerfile is reusuable.

ARG service
ENV CI=true

WORKDIR /usr/src/app

# Install global lerna so that we can bootstrap without loading dev dependencies.

RUN npm install -g lerna

# Install mono repo.

COPY package*.json ./
RUN npm ci --production

# Bootstrap service.

RUN echo "Service : ${service}"
COPY lerna.json .
COPY packages/foo/package*.json ./packages/foo/
COPY packages/foo/dist/ ./packages/foo/dist

COPY services/${service}/api/package*.json ./services/primary/api/
COPY services/${service}/api/dist/  ./services/primary/api/dist

RUN npm run bootstrap:production \
  --scope "*/${service}" --include-dependencies

# Create runtime image.

FROM node:14.13.1-alpine3.10
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/packages/ ./packages
COPY --from=builder /usr/src/app/services/ ./services

# Run process as non-root user.

RUN chown -R node:node packages && \
    chown -R node:node services

USER node

EXPOSE 3000

HEALTHCHECK --timeout=5s --interval=15s \
  CMD wget http://localhost:3000/health -O /dev/null

# Preserve synlinks so that peer dependencies work through symbolic links
# to packages created by lerna bootstrap.

CMD ["node", "--preserve-symlinks", "services/primary/api/dist/index"]

