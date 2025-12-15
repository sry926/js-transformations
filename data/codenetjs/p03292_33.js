function Main(s){
  s = s.split(" ").map(a=>+a);
  console.log(Math.max(...s)-Math.min(...s));
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));