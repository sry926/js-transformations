process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    main(chunk.trim());
});
 
function main(chunk){
    var lines = chunk.split("\n");
    for(var i=1;i<lines.length;i++){
        console.log(eval(lines[i].replace("=","")));
    }
}