function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0].split(" ")[0]);
  var ans =0;
  for(i=1;i<=n;i++){
    ans+=i;
  }

  console.log('%s', ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));