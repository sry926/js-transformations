function Main(input) {
  let result = false;
  for (let i = 0;i < input;i++) {
    for (let j = 0;j < input;j++) {
      if (input % (7 * i + 4 * j) == 0) {
        result = true;
      }
    }
  }
  console.log(result ? 'Yes' : 'No');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));