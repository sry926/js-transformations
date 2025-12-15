function main(input){
  const N=input.split('\n')[0].split(' ')[0];
  const X=input.split('\n')[0].split(' ')[1];
  var nums = input.split('\n')[1].split(' ').map((n) => parseInt(n, 10));
  var sum=0;
  var count=1;
  for(var i=0; i<N; i++){
    sum+=nums[i];
    if(sum>X){
      break
    }
    count++;
  }
  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));