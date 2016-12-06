//HTTP server that recieves only post and coverts request to uppercase 
//Then it returns to the client

var http = require('http')
var map = require('through2-map')
var port = process.argv[2]
var path = process.argv[3]

var server = http.createServer(function(req, res) {
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res)	
})

server.listen(port)

