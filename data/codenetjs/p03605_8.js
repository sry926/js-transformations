function Main (N) {
  var ans = "No";
  for (var i of String(N.split("\n")[0]).split("")) {
    if (i == "9") ans = "Yes";
  }
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));