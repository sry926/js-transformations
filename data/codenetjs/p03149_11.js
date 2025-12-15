function Main(input) {
  input = input.split("\n");
  var N1 = parseInt(input[0].split(" ")[0]);
  var N2 = parseInt(input[0].split(" ")[1]);
  var N3 = parseInt(input[0].split(" ")[2]);
  var N4 = parseInt(input[0].split(" ")[3]);
  N = new Array(N1,N2,N3,N4);
  var ans = "NO";
  N.sort(function(a, b) {
    return a-b;
});
  NN=(parseInt(N.join("")));
  if(NN==1479){
    ans="YES";
  }


  
  
  console.log('%s', ans);
}
  
// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
function debug(){
  var input = document.getElementById("input").value;
  Main(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));