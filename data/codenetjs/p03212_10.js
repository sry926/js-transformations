function main(input){
  const N = parseInt(input);
  let count = 0;
  
  const permutation = (sevenFiveThree, num, N) => {
    let Num = sevenFiveThree + 10*num;
    //console.log("Num",Num);
    let NumString = Num.toString();

    if(N>=Num) {
      //console.log("NumString",NumString);
      if(NumString.indexOf('7')!= -1 && NumString.indexOf('5')!= -1 && NumString.indexOf('3')!= -1) count++;
      permutation(7, Num, N);
      permutation(5, Num, N);
      permutation(3, Num, N);
    }
  };
  permutation(0, 0, N);
  console.log(count);    
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split('\n'));