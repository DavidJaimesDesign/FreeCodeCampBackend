var fs = require('fs')
var path = require('path')
    
module.exports = function(pathfile, ext, callback){
	ext = '.' + ext
	
	fs.readdir(pathfile, function(err, files){
		if(err) return callback(err);
		
		var filtered  = []
		
		files.forEach(function(file){
			if(path.extname(file) == ext){
				filtered.push(file);
			}
		});
		
		return callback(null, filtered);
	});

}
