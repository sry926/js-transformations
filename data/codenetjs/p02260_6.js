var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n = lines[0];

var A = lines[1].split(' ').map(function(i) {
	return i - 0;
});

var cnt = 0;
for (var i = 0; i < n; i++) {
	var min = i;
	for (var j = i; j < n; j++) {
		if (A[j] < A[min])
			min = j;
	}

	if (min == i)
		continue;

	var tmp = A[i];
	A[i] = A[min];
	A[min] = tmp;
	cnt++;
}  

console.log(A.join(' '));
console.log(cnt);