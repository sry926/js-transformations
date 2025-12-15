function Main(input) {
  input = input.trim().split("\n");
  const n = parseInt(input[0], 10);
  const as = input[1].split(" ").map((a) => parseInt(a, 10));

  let minHeight = as[0];
  let totalSteps = 0;

  for (let i=1; i<n; i++) {
    const height = as[i];
    if (minHeight > height) {
      totalSteps += minHeight - height;
    } else {
      minHeight = height;
    }
  }

  console.log(totalSteps);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));