//let input = "20";

function main(input){
  input = input.trim();
  let n = parseInt(input);
  let counts = [];
  for(let i=0; i<n; i++){
    counts[i]=0;
  }
  let kaisuu = Math.floor(Math.sqrt(n));
  for(let x = 1; x<=kaisuu; x++){
    for(let y = 1; y<=kaisuu; y++){
      for(let z = 1; z<=kaisuu; z++){
        let keisan = x*x+y*y+z*z+x*y+y*z+z*x;
        if(keisan<=n){
          counts[keisan-1]++;
        }
      }//z
    }//y
  }//x
  for(let i=0; i<counts.length; i++){
	  console.log(counts[i]);
  }
}
//main(input);
main(require("fs").readFileSync("/dev/stdin", "utf8"));