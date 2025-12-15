var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (arr.shift() != 0) {
    var a = arr.shift().split(" ").map(Number);
    var min = Infinity;
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            min = Math.min(min, Math.abs(a[i] - a[j]));
        }
    }
    console.log(min);
}