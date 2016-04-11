var http = require('http')
var url = require('url')

function parseTime(time){
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function prepateUnixTime(time){
  return { unixtime: time.getTime() }
}
var server = http.createServer(function(req,res){
  var parseUrl = url.parse(req.url, true)
  var time = new Date( parseUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parseTime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = prepateUnixTime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(process.argv[2])