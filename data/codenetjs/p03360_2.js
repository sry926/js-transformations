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

    var abcstr = input[0].split(' ');
    var abc = [parseInt(abcstr[0], 10), parseInt(abcstr[1], 10), parseInt(abcstr[2], 10)];

    abc.sort(function(a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });

    var k = parseInt(input[1], 10);

    var i = 0;
    for (i = 0; i < k; i++) {
        abc[0] *= 2;
    }

    var ans = 0;
    for (i = 0; i < abc.length; i++) {
        ans += abc[i];
    }

    console.log(ans);

    return 0;
}
