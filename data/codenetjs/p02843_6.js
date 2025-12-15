function Main(input) {
    const n = input.split("\n")[0];
    var ans = 0 
    for(var i = 1; i <= n; i++){
        if (n >= i * 100 && n <= i* 105) {
            ans = 1
            break;
        }
    }
    console.log(ans)
    }    
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  