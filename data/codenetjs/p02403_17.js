const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const arr = input.split(/\n/);
let stack = "";
arr.forEach(item => {
  const rectangle = item.split(" ").map(Number);
  const h = rectangle[0];
  const w = rectangle[1];
  if(h === 0 && w === 0) return;
  let row = "";
  for(let i = 0; i < w; i++) row += "#";
  for(let j = 0; j < h; j++) stack += row + "\n";
  stack += "\n";
})
console.log(stack.trim() + "\n");
