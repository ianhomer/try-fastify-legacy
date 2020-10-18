import { create } from "./web/server";
require("dotenv").config({ path: require("find-config")(".env") });

// Start your server
const server = create();
server.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(0);
  }
  console.log(`Server listening at ${address}`);
});
