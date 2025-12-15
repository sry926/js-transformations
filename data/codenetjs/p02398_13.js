'use strict';
(function(stdin) {
  //declare function

  //declare variable
  var inputs = stdin.toString().trim().split('\n');
  var cols = inputs[0].split(' ').map(Number);
  var count = 0;
  //main
  for (var i = cols[0]; i < cols[1]; i++) {
    if (cols[2] % i === 0) {
      count++;
    }
  }
  //display
  console.log(count);
})(require('fs').readFileSync('/dev/stdin', 'utf8'))