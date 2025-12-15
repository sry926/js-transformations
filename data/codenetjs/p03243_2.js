const input = require("fs").readFileSync("/dev/stdin", "utf8")
const n = Number(input)
function main(n){
  if(Number.isInteger(n / 111)){
  	return n
  }else{
 	return (Math.floor(n / 111) + 1) * 111
  }
}
        
console.log(main(n));