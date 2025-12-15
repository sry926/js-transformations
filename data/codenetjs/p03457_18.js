const check = (t,x,y)=>{
  const xy = x+y;
  if (t<xy) return false;
  return t%2 === xy%2;
};
function Main(input) {
  const temp = input.split('\n').map(line=>line.split(' ').map(data=>parseInt(data))).slice(1);
  const result = temp.map(d=>check(d[0],d[1],d[2])).every(data=>data);
  console.log(result?'Yes':'No');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));