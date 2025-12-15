process.stdin.resume();
process.stdin.setEncoding('utf8');
var input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});
process.stdin.on('end', function () {
  var lines = input.split('\n');
  var l = 0;
  var val;
  while (true) {
    var N = parseInt(lines[l++]);
    if (N === 0) {
      break;
    }
    
    if( N === 1 ){
        console.log(0);
    }
    else if(N===2){
        console.log(1);
    }
    else{
        var prime = new Array(N);
        var sq, i, j, base, found, cnt;
        sq = Math.sqrt(N);
        cnt = 1;
        prime[0] = 2;
            
        for(i=3;i<=N;++i){
            found = 1;
            for(j=0;prime[j]<=sq;++j){
                if( i % prime[j] === 0 ){
                    found = 0;
                    break;
                }
            }
            if( found ){
                prime[cnt++] = i;
            }
        }
        console.log(cnt);
    }
  }
});