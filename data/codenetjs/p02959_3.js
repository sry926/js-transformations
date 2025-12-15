'use strict'
const main = input => {
  const n = parseInt(input[0], 10), a = input[1].split(' ').map(val => parseInt(val, 10)), b = input[2].split(' ').map(val => parseInt(val));
  // console.log(n, a, b);
  let ans = 0;
  for(let i=0; i<n; i++) {
    if (b[i] >= a[i]) {
      ans += a[i];
      b[i] -= a[i];
      a[i] = 0;
      if (b[i] >= a[i+1]) {
        ans += a[i+1];
        b[i] -= a[i+1];
        a[i] = 0;
      } else {
        ans += b[i];
        a[i+1] -= b[i];
        b[i] = 0;
      }
    } else {
      ans += b[i]
      a[i] -= b[i];
      b[i] = 0;
    }
    // console.log(n, a, b, ans);
    
  }
  console.log(ans);
  
}
main(require("fs").readFileSync("/dev/stdin", "utf8").split('\n'));