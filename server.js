

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

app.get('/hash',function(req,res){

res.render('hash')
});
app.get('/hash1',function(req,res){
var sha = require ('./SHA256_ex/sha256_ori.js');

res.render('hash1',{K:req.query.key,
                    H:sha.s(req.query.key),
                    DH:sha.s(sha.s(req.query.key))});

});


app.get('/pug',function(req,res){
  res.render('news',{tl:'머릿말 입니다.'})
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
app.get('/test',function(req,res){
    var arr=[
      'Coffee',
      'Tea',
      'Milk',
      'cocoa',
      'juice',
      '아이스크림'
    ]
    var pick =`
<a href="/test?id=0">Coffee</a><br>
<a href="/test?id=1">Tea</a><br>
<a href="/test?id=2">Milk</a><br>
<a href="/test?id=3">cocoa</a><br>
<a href="/test?id=4">juice</a><br>
<a href="/test?id=5">icecream</a><br><br>
${arr[req.query.id]}

    `
    res.send(pick)
  //  res.send(arr[req.query.id])

//  var qr =req.query.name;
//  var id =req.query.id;
//  var tt =req.query.tt;
//  res.send(id +' , '+tt+' , '+ qr);
})
app.get('/inf',function(req,res){
res.render('inf')

})
app.get('/new_password',function(req,res){
  var id =req.query.id;
  var pw =req.query.pw;
  res.send(`
  <h3>${id} 님 안녕하세요</h3><br>
  <h3>패스워드가 '${pw}' 이건데 변경 하시겠습니까?</h3>
  <a href="/new_password1"><h1>변경</h1></a>
  <a href="/infopop"><h1>infopop</h1></a>
  <a href="/new_password1"><h1>변경</h1></a><br>`
)
//res.render('new_password',{id:''}{pw:''})
//res.snd('비밀번호 변경창<br>'
//+req.query.id + '님 안녕하세요.<br>'
//+req.query.id + '비밀번호를 변경하시겠습니까.<br>'
//+req.query.id + '========>변경<br>'
//+'<a href="/new_password1">변경</a>'
//)

})
app.get('/new_password1',function(req,res){
  res.render('new_password1')

})
app.get('/infopop',function(req,res){

  res.send(`<script>
      alert(' ---> 변경되었습니다.')
      </script>`);
res.render('info1')

})


app.listen(3013,function(){ //80은 기본포트라서 포트 숫자 안쳐도
  console.log('server running 3013 port');
});
