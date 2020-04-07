// app.js sau server-app.js sunt numele folosite pentru crearea unui server in nodeJS
const http = require("http");
const routes = require("./routes.js");

const server = http.createServer(routes);

// Listen poate accepta mai multi parametrii
server.listen(3000);
