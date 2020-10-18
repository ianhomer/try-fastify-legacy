import { create } from "./web/server";
import { config } from "dotenv";
import * as findConfig from "find-config";
config({ path: findConfig(".env") });

// Start your server
const server = create();
server.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(0);
  }
  console.log(`Server listening at ${address}`);
});
