var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers.js");
var handle = {}; // empty object, used as a dictionary in this case
  handle["/"] = requestHandlers.start;
  handle["/start"] = requestHandlers.start;
  handle["/upload"] = requestHandlers.upload;

console.log("index.js : Passing router.route and handle object to server.start");
server.start(router.route, handle);
