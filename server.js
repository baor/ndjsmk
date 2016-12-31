var express = require("express");
var app = express();

require("./routes.js")(app);

var server = app.listen(8181, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});

module.exports.server = server;
module.exports.app = app;