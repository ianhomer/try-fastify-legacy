import { hello } from "@try-fastify/foo";

export default (request, reply): void => {
  reply.code(200).send({ message: hello() });
};
