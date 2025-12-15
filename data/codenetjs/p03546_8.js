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

    var tokens = input[0].split(' ');
    var h = parseInt(tokens[0], 10);
    var w = parseInt(tokens[1], 10);
    var c = new Array(10);
    for (var i = 0; i < 10; i++) {
        c[i] = new Array(10);
        tokens = input[i + 1].split(' ');
        for (var j = 0; j < 10; j++) {
            c[i][j] = parseInt(tokens[j], 10);
        }
    }
    var a = new Array(h);
    for (var i = 0; i < h; i++) {
        a[i] = new Array(w);
        tokens = input[i + 11].split(' ');
        for (var j = 0; j < w; j++) {
            a[i][j] = parseInt(tokens[j], 10);
        }
    }

    for (var k = 0; k < 10; k++) {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                c[i][j] = Math.min(c[i][j], c[i][k] + c[k][j]);
            }
        }
    }

    var ans = 0;
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            if (a[i][j] >= 0) {
                ans += c[a[i][j]][1];
            }
        }
    }

    console.log(ans);

    return 0;
}
