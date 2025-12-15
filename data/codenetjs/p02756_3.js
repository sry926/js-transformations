function Main(input) {
  input = input.trim().split("\n").map(function(x) { return x.split(" ")});
  var S = input[0];
  var Q = parseInt(input[1], 10);
  var arr_qu = [];
  var nReverse = 0;
  var addHead = [];
  var addTail = [];
  for (var i = 0; i < Q; i++){
    arr_qu.push(input[i + 2]);
    if (arr_qu[i][0] === '1') {
      nReverse ++;
      continue;
    }
    if ((parseInt(arr_qu[i][1], 10) + nReverse) % 2 ===0) {
      addTail.push(arr_qu[i][2]);
      continue;
    }
    addHead.unshift(arr_qu[i][2]);
  }
  var ans = addHead.concat(S[0].split(""), addTail);
  if (nReverse % 2 === 1) ans = ans.reverse();
  console.log(ans.join(""));
}   

Main(require("fs").readFileSync("/dev/stdin", "utf8"));