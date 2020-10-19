FROM node:14.13.1-alpine3.10 AS builder
ARG service
ENV CI=true

WORKDIR /usr/src/app

# Install global lerna to help with bootstrapping
RUN npm install -g lerna

# Install mono repo
COPY package*.json ./
RUN npm ci --production

# Bootstrap service
RUN echo "Service : ${service}"
COPY lerna.json .
COPY packages/foo/package*.json ./packages/foo/
COPY packages/foo/dist/ ./packages/foo/dist

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

CMD ["node", "--preserve-symlinks", "services/primary/api/dist/index"]

