function Main(input){
  inp = input.split('\n');
  N = parseInt(inp[0]);
  A = inp[1].split(' ').map((i) => { return parseInt(i); });
//  N = 3;
//  A = [3, 2, 1];

  result = true;
  count = 0;
  for (k = 0; result; k++) {
    
    // is All Even Number
    for (i = 0; i < N; i++) {
      if (A[i]%2 != 0) {
        count = k
        result = false;
        break;
      }
      A[i] = A[i]/2;
    }    
  }

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
