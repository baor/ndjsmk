var winston = require("winston");
var request = require("request");
var url = require("url");

module.exports = {
	status: function(req, res) {
		winston.info("return OK");
		res.send("OK");
	},
	forward: function(req, res) {
		var queryData = url.parse(req.url, true).query;
		var host = "www.google.nl";
		var port = 80;
		var path = "/search";
		if (queryData.name) {
			console.log(queryData.name);
			path += queryData.name;
		}

		req.headers.host = host;
		var hostPort = "http://" + host + ":" + port;
		var options = {
			//https://www.google.nl/search?q=nodej.js
			url: hostPort,
			path: path,
			method: "GET",
			headers: req.headers
		};

		console.log("options:" + JSON.stringify(options));

		var httpResp = request(options, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body);
			} else {
				console.log(JSON.stringify(error));
			}
		});

		res.send(httpResp.body);
	}
};