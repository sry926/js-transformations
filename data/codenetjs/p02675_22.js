
function Main(input) {
  n = input.split("").reverse()[0]
  var t = ''
switch (n) {
case '3': t= 'bon'; break;
case '0':
case '1':
case '6':
  case '7': t= 'pon'; break;
default: t= 'hon'
}
  console.log(t)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));