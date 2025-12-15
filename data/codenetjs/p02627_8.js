function Main(input) {
  console.log(/^[A-Z]+$/g.test(input)==true?"A":"a")
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
