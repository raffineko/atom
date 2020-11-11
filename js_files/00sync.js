var fs = require('fs'); //파일 함수 호출 require=include

console.log('첫째예요');
var data = fs.readFileSync('sample.txt',{encoding:'utf-8'})
console.log(data);
console.log('둘째예요');
