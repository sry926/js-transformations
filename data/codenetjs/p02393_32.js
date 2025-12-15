        'use strict';
        (function(stdin) {
          var inputs  = stdin.toString();
          var cols = inputs.split('\n')[0].split(' ').map(Number);
var array = cols.sort(function(a,b){
    return a - b;
});
    console.log(array.join(' '));
      }(require('fs').readFileSync('/dev/stdin', 'utf8')));