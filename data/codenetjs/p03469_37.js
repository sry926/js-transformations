function Main(input) {
  console.log(`2018/${input.slice(5)}`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));