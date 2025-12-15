var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    main(input)
});

function main(input){
    var args = input.split('\n');
    args.forEach(function(pair){
        pair = pair.split(' ').map(Number);
        var res = '' + (pair[0] + pair[1]);
        console.log(res.length);
    })
}