import { peer } from "@try-fastify/foo";

export default (request, reply): void => {
  reply.code(200).send({ message: peer(2) });
};
