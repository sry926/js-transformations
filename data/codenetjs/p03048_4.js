function main(input){
  const lines = input.split('\n');
  const R = lines[0].split(' ').map(x => parseInt(x))[0];
  const G = lines[0].split(' ').map(x => parseInt(x))[1];
  const B = lines[0].split(' ').map(x => parseInt(x))[2];
  const N = lines[0].split(' ').map(x => parseInt(x))[3];

  var result = 0;
  for(var r=0;r<=N;r++){
    if(r*R>N){continue;}
    for(var g=0;g<=N;g++){
      if(g*G>N){continue;}
      for(var b=0;b<=N;b++){
        if(b*B>N){continue;}
        if(r*R + g*G + b*B==N){result++;}
      }
    }
  }

  console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));