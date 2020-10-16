# try-fastify

Try fastify.

## tl;dr

```sh
npm install
npm run bootstrap
npm start
```

## With Docker

```sh
docker-compose down
docker-compose up -d --build
```

## Day-to-day

Add dependency to all APIs.

```sh
npx lerna add middie --scope=api
```

Add dev dependency to all APIs.

```sh
npx lerna add eslint --scope=api --dev
```
