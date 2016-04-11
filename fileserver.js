var http = require('http')
var server = http.createServer(function(req,res){
	res.writeHead('200',{'content-type':'text/plain'})
	var fs = require('fs')
	var src = fs.createReadStream(process.argv[3])
	src.pipe(res)
})
server.listen(Number(process.argv[2]))