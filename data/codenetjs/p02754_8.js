function Main(input) {
    var N = parseInt(input[0], 10);
    var A = parseInt(input[1], 10);
    var B = parseInt(input[2], 10);

    var AB = A + B;

    var num = Math.floor(N / AB);
    var last = (N % AB);
    var result = num * A + (last > A ? A : last);
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split(/\n|\s/));