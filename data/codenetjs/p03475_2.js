function Main(input){
  var inp = input.split('\n');
  var inp1 = [];

// N, C, S, F を取得
  for(var i = 0; i < inp.length; i++){
    inp1.push(inp[i].split(' ').map((n) => { return parseInt(n) }));
  }
  var N = inp1[0][0];
  var C = [];
  var S = [];
  var F = [];
  for(var i = 1; i < inp1.length; i++){
    C.push(inp1[i][0]);
    S.push(inp1[i][1]);
    F.push(inp1[i][2]);
  }

// 
  for(var i = 0; i < N; i++){
    var t = 0;
    for(var j = i; j < N - 1; j++){
      if(t < S[j]){
        t = S[j];
      } else if(t % F[j] === 0){
        t = t;
      } else {
        t = t + F[j] - (t % F[j]);
      }
      t += C[j];
    }
    console.log(t);
  }
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));