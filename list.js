var list = require("./helloworld.js")
var dir = process.argv[2]
var ext = process.argv[3]
list(dir, ext, function res(err, data){
	if(err){
		console.log(err)
		return;
	}
	console.log(data.join("\n"))

})