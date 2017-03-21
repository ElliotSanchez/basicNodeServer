var http = require("http");
var url = require("url")

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("server.js : Request for " + pathname + " received.");
    route(handle, pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("server.js : Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("server.js : Server has started.");
}

exports.start = start;

/*
Structure of request object:

                      url.parse(string).query
                                |
url.parse(string).pathname      |
                        |       |
                        |       |
                      ----- -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
        querystring.parse(string)["foo"]    |
                                            |
                            querystring.parse(string)["hello"]

*/
