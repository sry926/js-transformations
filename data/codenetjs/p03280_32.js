function main(input) {
  var list = input[0].split(" ").map(v=>v-0);

  console.log((list[0]-1)*(list[1]-1));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
