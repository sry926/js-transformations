'use strict';
(function(stdin) { 
  var inputs = stdin.toString();
  var params = inputs.split('\n')[0].split(' ').map(Number);
  (function(a,b,c) {
    var max = Math.max(a,b,c);
    var min = Math.min(a,b,c);
    if(a < max){
      console.log(min,a,max)
    }else if(a > min){
      console.log(a,min,max)
    }else{
      console.log(min,max,a)
    };
    
    //????????????????????????

  }(params[0],params[1],params[2])); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));