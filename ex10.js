var net = require('net')
var strftime = require('strftime')
var server = net.createServer(function (socket){
	var date = strftime('%F %H:%M');
	socket.write(date + '\n');
	socket.end();
});

server.listen(process.argv[2])
