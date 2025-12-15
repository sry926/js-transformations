function Main(input) {
  input = input.split("\n")[0]
    input = input.split(" ");
    if (input[0] === input[1]){console.log("Yes")}
    else{console.log("No")};
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
