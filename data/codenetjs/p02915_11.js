function Main(input){
    i=Number(input);
    console.log(i**3);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));