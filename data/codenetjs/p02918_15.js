function Main(input) {
  input = input.split("\n");
  const n = input[0].split(" ")[0];
  const k = input[0].split(" ")[1];
  const s = input[1].split("");

  var happyRCount = 0;
  var happyLCount = 0;

  for (var i = 0; i < n - 1 ; i ++) {
    if (s[i] === "R" && s[i + 1] === "R") {
      happyRCount = happyRCount + 1;
    }
  }

  for (var i = n-1; i > 0 ; i --) {
    if (s[i] === "L" && s[i - 1] === "L") {
      happyLCount = happyLCount + 1;
    }
  }

  var happyCount = happyRCount + happyLCount;

  var maxHappyCount = 0;

  if (happyCount + k * 2 > n -1 ) {
    maxHappyCount = n -1;
  } else {
    maxHappyCount = happyCount + k * 2;
  }
  console.log(maxHappyCount);
}
  
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
