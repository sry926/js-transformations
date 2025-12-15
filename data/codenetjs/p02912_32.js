
function Main(arg) {
 
    var N = arg.split("\n")[0].split(" ")[0]-0;
    var M = arg.split("\n")[0].split(" ")[1]-0;

    var A = arg.split("\n")[1].split(" ");

    for (var i = 0; i < N; i++){
        A[i] = A[i] - 0;
    }

    for (var i = 0; i < M; i++) {
        A.sort(compareNumbers);
        A[0] = Math.floor(A[0] / 2);
    }

    var ans = 0;
    for (var i = 0; i < N; i++) {
        ans += A[i];
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function compareNumbers(a, b) { //for sort
    return b - a;
}