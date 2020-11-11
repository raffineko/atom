

var express = require('express')
var app = express()

app.use(express.static('data'))
app.get('/',function(req,res){
  res.send('<h1>main <br> page<h1>');
});
app.get('/hot',function(req,res){
  res.send('you are so hot');
});
app.get('/dynamic',function(req,res){
  var sp = ''; //빈문자열
  for(var i=1;i<10;i++){
    sp=sp+`<h1>${i}월!!`//그레이브 grave
  }
  res.send(sp);
})
app.listen(3013,function(){
  console.log('server running 3013 port');
});
