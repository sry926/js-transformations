process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    var line = chunk.toString();
    var answer = line.replace(/,/g," ");
    console.log(answer);
});
