//It should take 3 urls as the first 3 command line arguments 
//it should print the data as a string gonna have to use async
var http = require('http')
var bl   = require('bl')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var urls = [url1, url2, url3]
var pending = urls.length

urls.forEach(function(url){
	
	http.get(url, function(response) {
		response.setEncoding('utf8');
		var string = undefined;

		response.pipe(bl(function(err, data){
			console.log(data.toString())
		}))
	});
})


