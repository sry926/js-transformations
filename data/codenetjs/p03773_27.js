function Main(input) {
    input = input.split(" ");

    var a = parseInt(input[0], 10);
    var b = parseInt(input[1], 10);

    var c = a + b;
    if(c >= 24) {
        c = c - 24;
    }
    console.log(c);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));