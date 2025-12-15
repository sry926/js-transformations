var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var getDigits = function(num, base) {
  if (base == null) base = 2;
  return Math.log(num) / Math.log(base) + 1 | 0;
};


var gyo = input.split("\n");    
   
for(i=0; i<gyo.length; i++)
    gyo[i] = gyo[i].split(" ");
    
for(i=0; i<gyo.length; i++)
    for(j=0; j<2; j++)
        gyo[i][j] = parseInt(gyo[i][j], 10);

for(i=0; i<gyo.length; i++)
    console.log(getDigits(gyo[i][0]+gyo[i][1], 10));