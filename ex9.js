//It should write 2 lines to the console
//one should be an int amount of characters recieved
//the seond line should contain the entire string
var http = require('http')
var bl   = require('bl')

url1 = process.argv[2];
url2 = process.argv[3];
url3 = process.argv[4];

http.get(url, function(response) {
	response.setEncoding('utf8');
	var string = undefined;

	response.pipe(bl(function(err, data){
		console.log(data.toString().length)
		console.log(data.toString())
	}))
});
