// inputに入力データ全体が入る
function Main(input) {
    var obj = {};
    var N = input[0].split("").forEach(v=>obj[v]=true);
    console.log(Object.keys(obj).length==1?"No":"Yes");
}



Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));