function Main(input) {
  input = input.split("\n")[0];
  var cnt0 = 0, cnt1 = 0;
  for(var i = 0; i < input.length; i++) {
	cnt0 += input[i] == 0 ? 1 : 0;
	cnt1 += input[i] == 1 ? 1 : 0;
  }
  console.log(2 * parseInt(Math.min(cnt0, cnt1)));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
