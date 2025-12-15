// inputに入力データ全体が入る
function Main(input) {
    var ans = 0;
    var map = {};
    input[1].split(" ").forEach(v=>{
        if(!map[v]) ans++;
        map[v] = true;
    });
    console.log(ans==3?"Three":"Four")
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));