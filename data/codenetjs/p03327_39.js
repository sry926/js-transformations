function Main(input) {
  var num = Number(input[0])
  if (num >= 1000) {
    console.log('ABD')
  } else {
    console.log('ABC')
  }
}


Main(require("fs").readFileSync("/dev/stdin", "utf8").split('\n'));
