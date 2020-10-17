"use strict";
exports.__esModule = true;
exports.create = void 0;
var fastify_1 = require("fastify");
function create() {
  var server = fastify_1["default"]();
  // Add our route handler with correct types
  server.get("/", {}, function (request, reply) {
    reply.code(200).send({ Hello: "World!" });
  });
  return server;
}
exports.create = create;
