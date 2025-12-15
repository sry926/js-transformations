"use strict";
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
    for (var line of lines) {
        var l = line.trim().split(' ').map(Number);
	var h=l[0];
	var w=l[1];

	if (h===0 && w===0) {
	    break;
	}
	//console.log('h: ', h, 'w: ', w )
	console.log(aux(h,w));
    }
});

function aux(h,w)
{
    var l=[];
    l[0] = '';
    l[1] = '';
    var s='';
    for (var i=0; i<w; i++) {
	l[0] += (i%2===0) ? '#' : '.';
	l[1] += (i%2===1) ? '#' : '.';
    }
    l[0] += '\n';
    l[1] += '\n';
    
    //console.log('l[0]: ', l[0]);
    //console.log('l[1]: ', l[1]);
    
    for (var j=0; j<h; j++) {
	s += l[j % 2];
    }
    //console.log('s: ', s)

    return(s);
}
