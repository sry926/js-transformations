function main(input) {
    input = input.split("\n");
    var N = parseInt(input[0]);
    var Aarray = input[1].split(" ");
    var A = [];
    for (var i = 0; i < N; i++) {
        var a = parseInt(Aarray[i], 10);
        A.push(a);
    }
    var Ap = new Map();
    var Am = new Map();
    var Aplist = [];
    for (var i = 0; i < N; i++) {
        var Ap_tmp = Ap.get(A[i] + i + 1);
        if (Ap_tmp == undefined) {
            Aplist.push(A[i] + i + 1);
            Ap_tmp = 1;
        }
        else
            Ap_tmp++;
        Ap.set(A[i] + i + 1, Ap_tmp);
        var Am_tmp = Am.get(-A[i] + i + 1);
        if (Am_tmp == undefined)
            Am_tmp = 1;
        else
            Am_tmp++;
        Am.set(-A[i] + i + 1, Am_tmp);
    }
    var ans = 0;
    for (var i = 0; i < Aplist.length; i++) {
        var Ap_key = Aplist[i];
        if (Am.get(Ap_key) != undefined)
            ans += Ap.get(Ap_key) * Am.get(Ap_key);
    }

    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));