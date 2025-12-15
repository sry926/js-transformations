function main(input) {
    const args = input.split('\n');

    var NM = args[0].split(' ');
    var Spins = args[1].split(' ');

    var N = parseInt(NM[0]);
    var M = parseInt(NM[1]);

    for (var i = 0; i < M; i++) {
        Spins[i] = parseInt(Spins[i]);
    }

    Spins.sort(function (a, b) { return a - b; });

    var diff = [M-1];

    for (var i = 0; i < M - 1; i++) {
        diff[i] = Math.abs(Spins[i] - Spins[i + 1]);
    }

    var ans = 0;

    if(M < N) {
        N = M;
    }

    var index = 0;
    var ans = 0;

    if(N < diff.length / 2) {
        for (var i = 0; i < N - 1; i++) {
            index = diff.indexOf(Math.max.apply(null, diff));
            diff[index] = 0;
        }

        for (var i = 0; i < M - 1; i++) {
            ans += diff[i];
        }

        console.log(ans);
    } else {
        var roop = diff.length - N + 1;
        var max = Math.max.apply(null, diff);

        for (var i = 0; i < roop; i++) {
            index = diff.indexOf(Math.min.apply(null, diff));
            ans += diff[index];
            diff[index] = max;
        }

        console.log(ans);
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));