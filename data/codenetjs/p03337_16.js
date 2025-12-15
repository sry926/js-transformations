process.stdin.resume();
process.stdin.setEncoding('utf8');

var g_input = '';
process.stdin.on('data', function(chunk) {
    g_input += chunk;
});

process.stdin.on('end', function() {
    Main(g_input.split(/\r?\n/));
});

function Main(input) {

    var ab = input[0].split(' ');
    var a = parseInt(ab[0], 10);
    var b = parseInt(ab[1], 10);

    var ans = Math.max(a + b, a - b, a * b);

    console.log(ans);

    return 0;
}
