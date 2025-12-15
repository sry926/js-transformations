const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(/\n/);
let A = input[1].split(' ').map(Number);
let N = Number(input[0]);
console.log(A.join(' '));
for (let i=1; i < N; i++) {
    let v = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] > v) {
        A[j+1] = A[j];
        j--;
    }
    A[j+1] = v;
    console.log(A.join(' '));
}
