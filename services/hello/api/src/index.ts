import fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();

// Add our route handler with correct types
server.get('/', {}, (request, reply) => {
  reply.code(200).send({ 'Hello': 'World!' });
});

// Start your server
server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(0);
  }
  console.log(`Server listening at ${address}`);
});
