// get the input and separate it by line
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

// first number is how many lines of text tor process (aside from the first line)
var numLines = parseInt(lines[0]);

// go through all the lines
for (var i = 1; i <= numLines; i++) {
	// get 2 lists, one of x-coords, one of y-coords
	var xs = [];
	var ys = [];
	var coords = lines[i].split(" ");
	for (var j = 0; j < coords.length; j++) {
		if (j % 2 === 0) {
			xs.push(parseFloat(coords[j]));
		}
		else {
			ys.push(parseFloat(coords[j]));
		}
	}

	// calculate the slopes
	var slope1 = ((ys[1] - ys[0]) / (xs[1] - xs[0])).toFixed(6);
	var slope2 = ((ys[3] - ys[2]) / (xs[3] - xs[2])).toFixed(6);

	// print if the slopes are parallel
	if (slope1 == slope2) {
		console.log("YES");
	}
	else {
		console.log("NO");
	}
}