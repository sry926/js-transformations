function Main(input) {
  var current = parseInt(input)

  for (var i = current; i < 1000; i++) {
    var s = i.toString()
    if (s[0] === s[1] && s[1] === s[2]) {
      console.log(s);
      break;
    }
  }

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));