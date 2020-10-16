FROM node:14.13.1-alpine3.10

WORKDIR /usr/src/app

# Install app dependencies

COPY services/hello/api/docker-cmd.sh ./docker-cmd.sh

COPY services/hello/api/dist/  ./dist

USER node

EXPOSE 3000

CMD ./docker-cmd.sh

