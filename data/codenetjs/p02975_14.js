const main = (input) => {
  var lists = input.split("\n")[1].split(" ").map(v=>v-0);
  var ans = lists[0];
  for(var i=1;i<lists.length;i++){
    ans ^= lists[i];
  }
  console.log(ans == 0?"Yes":"No");
}

main(require('fs').readFileSync('/dev/stdin', 'UTF-8'));
