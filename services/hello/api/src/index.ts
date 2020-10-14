import { create } from "./web/server";

// Start server
const server = create();
server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(0);
  }
  console.log(`Server listening at ${address}`);
});
