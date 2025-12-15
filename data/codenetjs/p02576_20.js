function MainA(input){
    const [N,X,T] = input.split(' ');
    console.log(Math.ceil(N/X) * T);
}
MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
