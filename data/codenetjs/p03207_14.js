function main(input) {
  input=input.trim()
  var s = parseInt(input.split(" ")[0], 10);
const arr = input.split('\n').map((n) => parseInt(n, 10));
arr.shift();
var sum = function(arr){
  var sum = 0;
  for(var i=0; i<arr.length; i++){
    sum += arr[i];
  };
  return sum;
};
var max=Math.max.apply(null, arr)
console.log(sum(arr)-max/2);


}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));