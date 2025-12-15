function Main(input){
  input = input.split(" ").map(Number);
  var n = input[2]-input[0]
  var m = input[3]-input[1];
  console.log((input[2]-m)+" "+(input[3]+n)+" "+(input[0]-m)+" "+(input[1]+n));
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());