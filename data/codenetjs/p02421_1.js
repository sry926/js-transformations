"use strict";
main(require("fs").readFileSync("/dev/stdin", "utf8").replace(/\r?\n$/, "").split(/\r?\n/));

function main(lines){
	lines.shift();
	var line, t = 0, h = 0;
	while(line = lines.shift()){
		line = line.split(" ");
		if(line[0] > line[1]) t += 3;
		else if(line[0] == line[1]) t += 1, h += 1;
		else h += 3;
	}
	console.log(t, h);
}