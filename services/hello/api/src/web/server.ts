import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

export function create(): FastifyInstance {
  const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
  > = fastify();

  // Add our route handler with correct types
  server.get("/", {}, (request, reply) => {
    reply.code(200).send({ Hello: "World!" });
  });

  return server;
}
