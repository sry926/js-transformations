function Main(input) {
    input = input.trim().split("\n");
    tmp = input[0].split(" ");
    var N = parseInt(tmp[0], 10);
    var X = parseInt(tmp[1], 10);
    var L = [];
    tmp = input[1].split(" ");
    for (var i = 0; i < N; i++){
        L[i] = parseInt(tmp[i], 10);
    }

    var D = 0;
    var bound = 1;
    for (var i = 0; i < N; i++){
        D += L[i];
        if (D > X) {
            break;
        }
        bound++;
    }
    console.log(bound);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));