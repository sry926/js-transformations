function Main(s){
  s = s.split(" ").map(a=>parseInt(a));
  var a = s[0];
  var b = s[1];
  console.log(Math.max(a+b, a-b, a*b));
}

Main(require("fs").readFileSync("/dev/stdin","utf8").trim());