const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const r = Number(input);

const output = () => {
  if (r < 1200) {
    console.log('ABC');
  } else if (r < 2800) {
    console.log('ARC');
  } else {
    console.log('AGC');
  }
}

output();
