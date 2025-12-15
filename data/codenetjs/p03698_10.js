function main(input) {
    var size, s = new Set(), i, tmp, yes=true;
    tmp = input[0].split("");
    size = tmp.length;
    for(i=0; i<size; i++){
        if(s.has(tmp[i])){
            yes = false;
        }
        s.add(tmp[i]);
    }
    console.log(yes ? "yes" : "no");
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));