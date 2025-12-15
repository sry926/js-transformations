function Main(input) {
  input = input.trim().split("\n").map(function(x) { return x.split(" ")});
  var N = parseInt(input[0],10);
  var S = input[1][0];
  var vec_R = Array.from({length: N + 1}, () => 0);
  var vec_G = Array.from({length: N + 1}, () => 0);
  var vec_B = Array.from({length: N + 1}, () => 0);
  var arr_chr = [vec_R,vec_G,vec_B];
  var ans = 0;
  for(var i = S.length - 1; i >= 0; i--){
    if(S.substr(i, 1) === 'R') {
      vec_R[i] = vec_R[i + 1] + 1;
      vec_G[i] = vec_G[i + 1];
      vec_B[i] = vec_B[i + 1]; 
    }
    if(S.substr(i, 1) === 'G') {
      vec_R[i] = vec_R[i + 1];
      vec_G[i] = vec_G[i + 1] + 1;
      vec_B[i] = vec_B[i + 1];
    }
    if(S.substr(i, 1) === 'B') {
      vec_R[i] = vec_R[i + 1];
      vec_G[i] = vec_G[i + 1];
      vec_B[i] = vec_B[i + 1] + 1;
    }
  }
  vec_R = vec_R.pop();
  vec_G = vec_G.pop();
  vec_B = vec_B.pop();
  var a, b, c;
  var tmp = 0;
  for (var i = 0; i < (S.length - 3); i++){
    a = S.substr(i, 1);
    for (var j = i + 1; j < (S.length - 1); j++){
      b = S.substr(j, 1);
      if (a !== b){
        ans += arr_chr[chrSk_i(S, a, b)][j + 1];
        if (j+(j-i) < N && S.substr(j+(j-i), 1) !== a && S.substr(j+(j-i), 1) !== b) {
          ans --;
          tmp ++;
        }
      }
    }
  }
  function chrSk_i(S, a, b){
    if (a !== 'R' && b !== 'R') return 0;
    if (a !== 'G' && b !== 'G') return 1;
    if (a !== 'B' && b !== 'B') return 2;
  }
  console.log(ans);
}   

Main(require("fs").readFileSync("/dev/stdin", "utf8"));