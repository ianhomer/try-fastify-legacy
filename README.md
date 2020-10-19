# try-fastify

Try fastify.

## tl;dr

```sh
npm install
npm run bootstrap
npm start
http http://localhost:3000
```

## With Docker

```sh
npm run docker:up
http http://localhost:3000
```

## Day-to-day

Add dependency to all APIs.

```sh
npx lerna add middie --scope=api
```
