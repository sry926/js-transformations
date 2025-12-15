function isValid(input, i, j) {
    var dx = [-1, 0, 1, 0];
    var dy = [0, -1, 0, 1];
    var k;
    for (k = 0; k < 4; k++) {
        if (i + dx[k] < 0 || j + dy[k] < 0 || i + dx[k] >= input.length || j + dy[k] >= input[i].length) continue;
        if (input[i + dx[k]][j + dy[k]] === '#') {
            return true;
        }
    }
    return false;
}

function Main(inp) {
    var input = inp.split('\n').slice(1).map(function(line) {
        return line.split('');
    });
    var i, j;
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input[i].length; j++) {
            var v = input[i][j];
            if (v !== '#') continue; // # だけ
            if (!isValid(input, i, j)) {
                console.log('No');
                return;
            }
        }
    }
    console.log('Yes');
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));