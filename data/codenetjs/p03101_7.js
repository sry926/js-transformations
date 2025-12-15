function main(input) {
  const args = input.split('\n');
  const row1 = args[0].split(' ').map(n => parseInt(n, 10));
  const row2 = args[1].split(' ').map(n => parseInt(n, 10));
  
  const H = row1[0],
        W = row1[1],
        h = row2[0],
        w = row2[1];
  
  ans = (H * W) - (h * W) - ((H - h) * w);
  
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));