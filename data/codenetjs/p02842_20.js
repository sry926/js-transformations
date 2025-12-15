function Main(input) {
  input = input.split("\n");
  var a = input[0];
  for(var i=0;i<a;i++){
    var b = Math.floor(i*1.08);
    if(b==a){
      console.log(i);
      break;
    }else if(b>a){
      console.log(":(");
      break;
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));