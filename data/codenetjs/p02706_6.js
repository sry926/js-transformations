function main(input){
  input = input.trim();
  var list1 = input.split("\n")[0].split(" ");
  var list = input.split("\n")[1].split(" ");
  for(var i=0; i<list.length; i++){
    list[i] = parseInt(list[i]);
  }
  var nissuu = parseInt(list1[0]);
  var sKei = 0;
  
  for(var i=0; i<list.length; i++){
    sKei += list[i];
  }
  console.log(nissuu - sKei);
  
}
main(require("fs").readFileSync("/dev/stdin","utf8"));