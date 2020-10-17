FROM node:14.13.1-alpine3.10

WORKDIR /usr/src/app

# Install app dependencies

COPY services/hello/api/dist/  ./services/primary/dist

RUN npm install --production
RUN npm run bootstrap:production

USER node

EXPOSE 3000

CMD ["node", "services/primary/dist/index"]

