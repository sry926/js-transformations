function Main(input) {
    input = input.split(" ");
    var A = parseInt(input[0],10);
    var B = parseInt(input[1],10);
    console.log(Math.max.apply(null,[A+B,A-B,A*B]))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));