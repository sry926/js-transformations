
function Main(input) {
  const data = input.split("\n").map((val) => parseInt(val, 10));
  var min = data.map(function(i) {
    if(i%10 === 0) {
      return 0;
    } else {
      return (10 - i%10)
    }
  });
  var max = Math.max(...min);
  var sum = 0;
  data.forEach(function(e) {
    sum += e;
  });
  min.forEach(function(f) {
    sum += f;
  });

  console.log(parseInt(sum-max, 10));

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));