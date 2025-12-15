function main (input) {
  var inputs = input.split("\n");
  var th = inputs[0].split(" ");
  var h = inputs[1].split(" ").slice(0,th[0]);
  //console.log(h,th);
  
  console.log(h.filter(elm => {return elm >= th[1]}).length+"\n");     
  //console.log(h,th);

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));