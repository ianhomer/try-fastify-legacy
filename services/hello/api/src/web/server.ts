import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import hello from "./hello";

export function create(): FastifyInstance {
  const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
  > = fastify();

  // Add our route handler with correct types
  server.get("/", {}, hello);

  return server;
}
