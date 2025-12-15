process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    var line = chunk.toString().split(' ');
    var a = Number(line[0]);
    var b = Number(line[1]);
    if (a > b){
        console.log("a > b");
    }else if(a < b){
        console.log("a < b");
    }else{
        console.log("a == b");
    }
});