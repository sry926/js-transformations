function Main (input) {
  let N = Number(input);
  let FizzBuzzSum = 0;
  for(var i = 0; i < input; i++){
      if(!(i % 3 == 0 || i % 5 == 0)) {
        FizzBuzzSum += i;
      }
  }
  console.log(FizzBuzzSum);
}
  
  
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
