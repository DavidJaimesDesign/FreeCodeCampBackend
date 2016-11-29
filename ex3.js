var fs = require('fs');
var path = process.argv[2];
var filecontent = fs.readFileSync(path);
filecontent = filecontent.toString();
filecontent = filecontent.split('\n');
console.log(filecontent.length-1);
