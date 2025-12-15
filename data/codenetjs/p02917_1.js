function main(input) {
  const args = input.split("\n");
  const N = Number(args[0]);
  const B = args[1].split(" ");
  var A = [];
  var max = 0;
  if (N === 2) {
    console.log(B[0] * 2);
  } else {
    for (var i = 0; i < N; i++) {
      if (i === 0) {
        if (Number(B[i]) <= Number(B[i + 1])) {
          A.push(Number(B[i]));
          A.push(Number(B[i]));
        } else {
          A.push(Number(B[i + 1]));
          A.push(Number(B[i + 1]));
        }
      } else if (i === N - 1) {
      } else if (i === N - 2) {
        A.push(Number(B[i]));
      } else {
        if (Number(B[i]) <= Number(B[i + 1])) {
          A.push(Number(B[i]));
        } else {
          A.push(Number(B[i + 1]));
        }
      }
    }
    console.log(sum(A));
  }
}

var sum = function(arr) {
  var sum = 0;
  arr.forEach(function(elm) {
    sum += elm;
  });
  return sum;
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
