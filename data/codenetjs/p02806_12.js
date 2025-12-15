process.stdin.resume();
process.stdin.setEncoding('utf8');
 
var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    // ここで入力を処理する
    lines.push(line);
});
var sub_fn = (ary)=>{
  
}
reader.on('close', () => {
 // var x = 1*lines[0].split(' ')[0]
 // var l = lines[0].split(' ')[1]
  var l = lines[lines.length -1]
 // console.log(l)
  var c_flg = false;
  var t = 0;
  for(var i=1; i<(lines.length -1);i++){
    var d = lines[i].split(' ')[0];
    var e = lines[i].split(' ')[1];
    if(c_flg){
    t += (1*e)
    }
    //console.log(d)
    if(d == l){
      c_flg = true
    }
  }
    console.log(t)


});
