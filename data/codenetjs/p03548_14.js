function Main (input) {
  input = input.split("\n")[0].split(" ").map(Number);
  var X = input[0];
  var Y = input[1];
  var Z = input[2];
  var now = 0;
  var loop = true;
  var ans = 0;
  while (loop) {
    now += Z;
    now += Y;
    ans++;
    if (now + Z > X) {
      break;
    }
  }
  console.log(ans-1);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));