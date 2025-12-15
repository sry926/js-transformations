function main(lines) {
  const N = +lines[0];
  const as = splitN(lines[1]).sort((a, b) => a-b);
  
  for (let i = 0; as[i] !== undefined; i++) {
    if (as[i] === null) continue; 
    const a = as[i];
    for (let j = i+1; as[j] !== undefined; j++) {
      if (as[j] % a == 0) {
        if (as[j] == a) as[i] = null;
        as.splice(j, 1);
        j--;
      }
    }
    if (as[i] === null) {
      as.splice(i, 1);
      i--;
    }
  }
  const res = as.filter(v => v!== null).length;
  
  console.log(res);
}


main( require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n") );



function splitN(s) {
  return s.split(' ').map(Number);
}