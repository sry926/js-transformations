function Main(input) {
  input = input.replace(/\n/g, ' ');
  input = input.split(" ");
  var A = input[0];
  var B = input[1];
  var ans = 0;
  var i=1;
  while(true){
    if(B<=(A*i-(i-1))){
      break;
    }
    i++;
  }
  console.log(i);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));