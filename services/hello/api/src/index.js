"use strict";
exports.__esModule = true;
var server_1 = require("./web/server");
// Start your server
var server = server_1.create();
server.listen(3000, function (err, address) {
  if (err) {
    console.error(err);
    process.exit(0);
  }
  console.log("Server listening at " + address);
});
