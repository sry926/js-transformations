process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {
  var [num1, num2, num3] = input.split(' ');
  const a = parseInt(num1);
  const b = parseInt(num2);
  const c = parseInt(num3);

  if ( a < b && b < c ) {
    console.log('Yes');
  } else {
    console.log('No');
  }
})
