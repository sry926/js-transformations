var stdin = require("fs").readFileSync("/dev/stdin", "utf8");

//console.log(stdin)
var a =  stdin.split(" ")

 var dis=Number(a[0])
 var time=Number(a[1])
 var speed=Number(a[2])

//cal by min
const cal=(dis,speed)=>{
  var result = dis/speed
  return result
}

if (cal(dis,speed)>time){

  console.log('No');
}
else{
  console.log('Yes');

}
