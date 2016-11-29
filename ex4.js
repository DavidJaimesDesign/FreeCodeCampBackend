var fs = require('fs')
var path = process.argv[2]
var numlines = 0

function callbackFunction(){
	console.log(numlines.length - 1);
}


function countNewLines(callback){
	fs.readFile(path, function doneReading(err, filecontent) {
		numlines = filecontent.toString().split('\n')
		callback();
	})
}

countNewLines(callbackFunction);
