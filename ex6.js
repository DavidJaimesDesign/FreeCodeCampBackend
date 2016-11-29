var fs = require('fs')
var mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], function(err, files){
	files.forEach(function(file){
		console.log(file);
	});
});
