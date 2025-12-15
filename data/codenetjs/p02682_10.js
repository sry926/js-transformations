function Main(input){
    input = input.split(" ")
    var a_1=parseInt(input[0],10);
    var b_0=parseInt(input[1],10);
    var c_m1=parseInt(input[2],10);
    var k=input[3];
    var n1=0;
    var n0=0;
    var nm1=0;
   
  if(a_1>=k){
    n1=k;
  }
  else if((a_1+b_0)>=k){
    n1=a_1;
    n0=k-(n1)
  }
  else if((a_1+b_0+c_m1)>=k){
    n1=a_1;
    n0=b_0
    nm1=k-(n1+n0); 
  }
  console.log(1*n1+ 0*n0 - nm1)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());