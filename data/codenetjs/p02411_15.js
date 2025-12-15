const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const arr = input.split('\n');
let str = '';

arr.forEach((elm) => {
  const item = elm.split(' ').map(Number);
  const m = item[0];
  const f = item[1];
  const r = item[2];
  const sum = m + f;
  if(m === -1 && f === -1 && r === -1) return;
  if(m === -1 || f === -1 || sum < 30) {
    str += 'F\n';
    return;
  }
  if(sum >= 80) str += 'A\n';
  if(sum >= 65 && sum < 80) str += 'B\n';
  if(sum >= 50 && sum < 65) str += 'C\n';
  if(sum >= 30 && sum < 50) {
    if(r >= 50) {
      str += 'C\n';
    } else if(r < 50) {
      str += 'D\n';
    }
  }
})

console.log(str.trim());
