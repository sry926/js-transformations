//input = "4 5\n0 5\n-2 4\n3 4\n4 -4"

function main(input){
  input = input.trim();
  let answer = "";
  let list = input.split("\n");
  let n = parseInt(list[0].split(" ")[0]);
  let d = parseInt(list[0].split(" ")[1]);
  function kyori(x,y){
    return(Math.sqrt(x**2+y**2));
  }
  let count=0;
  for(let i=1; i<list.length; i++){
    let x = parseInt(list[i].split(" ")[0]);
    let y = parseInt(list[i].split(" ")[1]);
    if(kyori(x,y)<=d){count++;}
  }
  answer = count;
  console.log(answer);
}
//main(input);
main(require("fs").readFileSync("/dev/stdin", "utf8"));
