var fs = require('fs')
var path         = process.argv[2]
var extension    = process.argv[3]
var rawFileList  = ["empty array"]
var filteredList = [] 

function printArray(array){
	for(i = 0; i < array.length-1; i++){
		console.log(array[i]);
	}
}
function callbackFunction(){
	for(i = 0; i < rawFileList.length; i++){
		var type = rawFileList[i].split('.')
		type = type[type.length - 1]
		if(extension == type){
			filteredList.push(rawFileList[i]);
		}
	}

	printArray(filteredList)
}

function filterFilesByType(callback){
	fs.readdir(path, function doneReading(err, list){
		rawFileList = list;
		callback();
	})
}

filterFilesByType(callbackFunction);
