var middlewares = require("./middlewares.js");

module.exports = function(app) {
	app.get("/status", middlewares.status);
	app.get("/forward", middlewares.forward);
};