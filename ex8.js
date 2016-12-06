//It should write 2 lines to the console
//one should be an int amount of characters recieved
//the seond line should contain the entire string
var http = require('http')
var bl   = require('bl')

url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding('utf8');
	var string = undefined;

	response.pipe(bl(function(err, data){
		console.log(data.toString().length)
		console.log(data.toString())
	}))
});
