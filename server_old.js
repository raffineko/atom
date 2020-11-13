

var express = require('express')
var app = express()
app.set('view engine', 'pug'); // (1) 퍼그 사용법
app.set('views', './html'); // (2)퍼그 실행 -html폴
app.locals.pretty =true;
app.use(express.static('data'))
app.get('/',function(req,res){
  res.send(`<h1>main <br> page<h1>`);
});
app.get('/hot',function(req,res){
  res.send('you are so hot');
});
app.get('/pug',function(req,res){
  res.render('news')
});
app.get('/dynamic',function(req,res){
  //var sp = ''; //빈문자열
  //for(var i=1;i<10;i++){
  //  sp=sp+`<h1>${i}월!!`//그레이브 grave
//  }
  res.send(`<script>
    alert('안녕')
    </script>`);
  res.send(sp);
})
app.get('/gender',function(req,res)
{res.send(`<script>
yesorno=confirm('당신은 남자입니까?')
document.open()
if(yesorno==true)
document.write("당신은<font color=blue> 남성</font> 입니다!")
else
document.write("당신은<font color=red> 여성</font> 입니다!")</script>`);})

app.listen(3013,function(){ //80은 기본포트라서 포트 숫자 안쳐도
  console.log('server running 3013 port');
});
