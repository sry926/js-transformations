const Main = input => {
    input = input.trim();
    input = input.split(" ");
    const a = input[0];
    const b = input[1];

    const result = a * b;
    console.log(result);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));