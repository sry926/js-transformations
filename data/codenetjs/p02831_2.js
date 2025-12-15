function main(input){
    input=input.split(' ');
    inputA=parseInt(input[0]);
    inputB=parseInt(input[1]);
    
    x = inputA * inputB;

    out = inputA % inputB;
    while(out!=0){
        inputA = inputB;
        inputB = out;
        out = inputA % inputB;
    }

    console.log(x/inputB);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));