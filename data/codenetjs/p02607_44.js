function main(input) {
  const n = parseInt(input[0]);
  const a = input[1].trim().split(" ").map(i => parseInt(i));

  let cnt = 0;

  for(let i=0;i<n;i=i+2){
    if(a[i]%2===1){
      cnt++;
    }
  }
  console.log(cnt);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"));