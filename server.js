// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var http = require('http');
var server = http.createServer();
var express = require('express')
var app = express()
server.on('request',doRequest);
//server.listen(3013);
console.log('starting Server !!');
function doRequest(req,res){
  res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'})
  res.write('오천원')
  res.end()
}
app.use(express.static('data'))



app.get('/',function(req,res){
  res.send('<h1>main <br> page<h1>');
});
app.get('/hot',function(req,res){
  res.send('you are so hot');
});
app.listen(3003,function(){
  console.log('server running 3003 port');
});
