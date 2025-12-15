'use strict'

function main(s) {

  const str = s.split('\n')[0].split('');
  str.sort();

  const ans = (str.join('') === 'abc') ? 'Yes' : 'No'
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
