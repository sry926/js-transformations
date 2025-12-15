var x = require('fs').readFileSync('/dev/stdin', 'utf8');

var input = x.split("\n");

var array = input[1].split(" ").map(Number);

max = Math.max.apply(null, array);
min = Math.min.apply(null, array);
sum = array.reduce(function(a, b){
        return a + b;
});

console.log(min + " " + max + " " +sum);

