function Main(input){
  n=parseInt(input.split('\n')[0]),f=1;
  while(n--)f*=n+1;
  console.log(f);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));