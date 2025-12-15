function Main(input) {
    var n = input;
    input = input.split("").map(Number);
    var sum = 0;
    for(var i=0;i<input.length;i++){
        sum += input[i];
    }
    console.log(n%sum==0?"Yes":"No")
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());