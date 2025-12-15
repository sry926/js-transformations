function Main(input) {
  const data = input.split("");
  var ans = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i] === "1") {
      ans.push("1");
    } else if (data[i] === "0") {
      ans.push("0");
    } else if (data[i] === "B") {
      if (ans.length > 0) {
        ans.pop();
      } else {
        continue;
      }
    }
  }
  console.log(ans.join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
