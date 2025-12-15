let main = (standardInput) => {
    let rangeList = standardInput.split(' ');
    let abRange = Number.parseInt(rangeList[0]);
    let bcRange = Number.parseInt(rangeList[1]);
    let acRange = Number.parseInt(rangeList[2]);
  	let sRange = diff(abRange + bcRange, abRange + acRange);
  	sRange = diff(sRange, bcRange + acRange);

    console.log(`${sRange}`);
}

let diff = (org, dist) => {
  if(org > diff){
     return diff;
   }
  return org;
}

main(require('fs').readFileSync('/dev/stdin', 'UTF-8'));