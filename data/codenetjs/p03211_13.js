function Main(input) {
    input = input.split("");
    sa = 753;
    for(j = 1; j <= 9; j++){
        for(i = 0; i < input.length - 2; i++){
            if(input[i] == String(j)){
                tikai = parseInt(input[i] + input[i+1] + input[i+2]);
                kari_sa = Math.abs(753-tikai)
                if(sa > kari_sa) sa = kari_sa;
            }
        }
    }
    console.log(sa);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));