function main(arg) {    
 	arg = arg.trim().split('\n');
 	var n = Number(arg[0]),
  		cut = arg[1].split('');

  	console.log(cut.map(function(str) {
      var num = str.charCodeAt() + n;
      if (num > 90) {
        num -= 26;
      }
      return String.fromCharCode(num)
    }).join(''));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));