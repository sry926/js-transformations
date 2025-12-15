var fs = require("fs");
Main(fs.readFileSync("/dev/stdin","utf-8"));

function Main(input){
    input=input.split("\n")[0].split("");
    var ans="";
    for (var i in input){
      if(i%2==0)ans += input[i];
    }
    console.log(ans);
}