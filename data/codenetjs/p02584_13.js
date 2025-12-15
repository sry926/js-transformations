function Main(input) {
  const [x, k, d] = input.trim().split(" ").map((a) => parseInt(a, 10));
  const a = x / d;
  const b = x % d;
  if (a > k) {
    if (x > 0) {
      console.log(Math.abs(x - k * d));
    } else {
      console.log(Math.abs(x + k * d))
    }
  } else {
    if (k % 2 === 0 && b === 0) {
      console.log(b + d);
    } else {
      console.log(b);
    }
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
