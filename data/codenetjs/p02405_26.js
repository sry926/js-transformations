var col = "#.",
	end = false;

var col = new Buffer(300);
col.fill('#.');
col = col.toString();

require('fs').readFileSync('/dev/stdin', 'ascii').split('\n').forEach(main);


function main(line) {
	if (line === '0 0') {
		end = true;
		return;
	}
	if (end) return;
	var hw = line.split(' ').map(Number);
	var h = hw[0];
	var w = hw[1];
	even = col.slice(0, w);
	odd = col.slice(1, w + 1);
	for (j = 0; j < hw[0]; j++) {
		if (j % 2 === 0) console.log(even);
		else console.log(odd);
	}
	console.log("");
}