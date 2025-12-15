function Main(input) {
    var n = input.split('\n')[0];
    var a = input.split('\n')[1];
    var extra = n % 500;
    if(a>=extra){
         console.log('Yes')
    }else{
        console.log('No')
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));