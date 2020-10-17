FROM node:14.13.1-alpine3.10

WORKDIR /usr/src/app

# Docker layers in order of least changing first

# Install global lerna to help with bootstrapping
RUN npm install -g lerna

# Install mono repo
COPY package.json .
RUN npm install --production

# Bootstrap service
COPY services/hello/api/dist/  ./services/primary/dist

RUN npm run bootstrap:production

USER node

EXPOSE 3000

CMD ["node", "services/primary/dist/index"]

