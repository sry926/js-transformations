// parameter "input" gets all data
function Main(input) {
  console.log(input.startsWith('ABC') ? 'ARC' : 'ABC');
  return;
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));