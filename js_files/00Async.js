var fs=require('fs');
console.log('첫째')
var data = fs.readFile('sample.txt',{encoding:'utf-8'},function(err,data){
  if(err) throw err;
  console.log(data);
})
console.log('둘째')
