function binSearch(arr, val) {
	if (arr.length == 0) return false;
	var p = Math.floor(arr.length / 2);

	if (arr[p] == val) {

		return true;
	} else if (arr[p] < val) {
		return binSearch(arr.slice(p + 1), val);
	} else {
		return binSearch(arr.slice(0, p), val);
	}
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift();
var S = lines.shift().split(' ').filter(function(val, i, arr) {
	return arr.indexOf(val) === i;
}).map(function(i) {return +i;});
lines.shift();
var T = lines.shift().split(' ').map(function(i) {return +i;});

var cnt = 0;
T.forEach(function(val) {
	if (binSearch(S, +val))
		cnt++;
});
console.log(cnt);