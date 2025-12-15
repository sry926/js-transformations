function Main(input) {
  input = input.split(' ');
  if(input[0]==2 || input[1]==2){
    console.log('No');
  } else {
    console.log('Yes');
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
