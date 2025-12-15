var Main  = function(input){
    x=parseInt(input.split("\n")[0],10);

    if (x==0) console.log(1)
    else console.log(0)

};


Main(require("fs").readFileSync("/dev/stdin", "utf8"));
