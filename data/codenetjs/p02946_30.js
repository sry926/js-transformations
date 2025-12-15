
function Main(input) {
    let K = parseInt(input[0], 10);
    let X = parseInt(input[1], 10);

    let min = X - (K - 1);
    let max = X + (K - 1);
    let result = '';

    for (let i = min; i <= max; i++) {
        result += i !== max ? `${i} ` : `${i}`;
    }
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split(/\n|\s/));