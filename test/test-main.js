var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();

var server = require("../server.js");
var app = server.app;
server = server.server;


chai.use(chaiHttp);


describe('Blobs', function() {
	it('should list ALL blobs on /blobs GET', function() {
		var response = chai.request(server)
			.get('/blobs');

		return response.then(function(res) {
			res.should.have.status(200);
		});
	});
	it('status should be OK', function() {
		var response = chai.request(server)
			.get('/status');
			
		return response.then(function(res) {
			res.should.have.status(200);
		});
	});
});