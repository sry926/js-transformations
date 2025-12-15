process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => {
  var arry = input.split('\n');
  var result = ''
  for (var i = 0; i < arry.length; i++) {
    var arr = arry[i].split(' ')
    var x = Number(arr[0]-0);
    var y = Number(arr[2]-0);

    var op = arr[1]


    if (op == '+') {
      result+= x + y;
    } else if (op == '-') {
      result+= x - y;
    } else if (op == '*') {
      result+= x * y;
    } else if (op == '/') {
      result+= Math.floor(x / y);
    }
    result+='\n'
  }
  console.log(result.trim());
})

