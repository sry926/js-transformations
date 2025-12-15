function Main(input) {
    var args = input.trim().split('\n');
    var text = args[1].split(' ');
    var ans = "";
    for(var i = 0;i <= Number(args[0]);i++) {
        ans += text[0].charAt(i);
        ans += text[1].charAt(i);
    }
    console.log(ans);
}
/* 
 var input = `2
aa aa`;
Main(input);
 */  
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));