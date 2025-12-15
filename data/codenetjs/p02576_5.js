function Main(input) {
  const lines = input.split('\n');
  const line = lines[0].split(' ').map(i => parseInt(i));
  const N = line[0];
  const X = line[1];
  const T = line[2];
  let answer = Math.ceil(N / X) * T
  console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
