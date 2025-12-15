function main(input) {
  input = input.trim();
  const [a,b] = input.split(" ").map(Number);

  if(a+b>=10){
    console.log("error");
  }else{
    console.log(a+b);
  }
    
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));