function Main(input) {
    input = input.trim()
  input = input.split("\n");
  if(input[0]<3200) console.log("red");
  else console.log(input[1])
}Main(require("fs").readFileSync("/dev/stdin", "utf8"));