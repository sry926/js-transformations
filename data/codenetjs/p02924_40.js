function Main(arg) {
 
    var N = arg.split("\n")[0] - 0;
    
    var a = new Array();
    for (var i = 0; i < N; i++){
        a.push(i + 1);
    }

    var b = a.slice(1);
    b.push(a[0]);

    var M = new Array();

    for (var i = 0; i < N; i++){
        M.push(a[i]%b[i]);
    }

    var ans = M.reduce(function(prev, current, i, arr) {
        return prev+current;
    });

    console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));