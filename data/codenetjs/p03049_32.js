var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = lines[0].split(" ")[0];
    lines.shift();
    var s = lines.map(i => i.split(""));

    var ans = 0;
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < s[i].length - 1; j++) {
            if (s[i][j] === "A" && s[i][j + 1] === "B") { ans++; }
        }
    }

    var a = 0, b = 0, count = 0;
    for (var i = 0; i < N; i++) {
        if (s[i][0] === "B") { b++; }
        if (s[i][s[i].length - 1] === "A") { a++; }
        if (s[i][0] === "B" && s[i][s[i].length - 1] === "A") { count++; }
    }

    if (count === a && count === b) { ans += count - 1 }
    else { ans += Math.min(a, b) }

    console.log(ans);
});