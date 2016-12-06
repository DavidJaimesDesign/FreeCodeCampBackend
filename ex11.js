var http = require('http')
var fs = require('fs')

path = process.argv[3];
var server = http.createServer(function(req, res) {
	var file = fs.createReadStream(path);
	file.pipe(res);
})

server.listen(process.argv[2])
