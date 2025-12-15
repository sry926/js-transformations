process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  function primeNumber (num) {

    //2 は素数なので true を返す
    if(num === 2) {
        return true;
    } else {

        for(i = 2; i < num; i++) {

        //2以上の数で割ったとき余りが0になれば false を返す。つまり素数ではない。
            if(num % i === 0) {
                return false;
                break;
            }

            //ループが最後まで行く、つまり割れる数がなかったら true を返す。つまり素数。
            if(i + 1 === num) {
                return true;
            }
        }
    }
}

  
 var x = Number(lines[0]);

 while(true){
   var a = primeNumber(x);
   if(a == true){
     console.log(x);
     break;
   }
   x++;
 }
});