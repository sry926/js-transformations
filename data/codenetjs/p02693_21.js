"use strict";
const main = arg => {
    var lines = arg.split('\n');

    var k = +lines.shift();

    var array = lines[0].split(" ").map(Number);
    
    var isDistance = false;

    for(var i = array[0]; i <= array[1]; i++){
        if((i % Number(k)) === 0){
            isDistance = true;
        }
    }

    if(isDistance){
        console.log("OK");
    }else{
        console.log("NG")
    }
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));