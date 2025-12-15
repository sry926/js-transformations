function main(input){
  input = input.split('\n');
  const N = Number(input[0]);
  const colors = input[1].split('');

  let count=0;
  let st = 0;
  let ed = colors.length-1;
  while(true){
    //console.log(colors);
    let errors = findWR(colors, st, ed);
    if(errors.length === 0) break;

    let w = firstW(colors, st, ed);
    let r = lastR(colors, st, ed);
    colors[w] = 'R';
    colors[r] = 'W';
    st = w;
    ed = r;
    // if(errors.length === 1){
    //   count++;
    //   break;
    // }
    // let w = errors[0];
    // let r = errors[errors.length-1];
    // colors[w] = 'R';
    // colors[r+1] = 'W';
    count++;
  }

  console.log(count);
}

function findWR(colors, st, ed){
  let indices = []
  for(let i=st; i<ed; i++){
    if(colors[i] === 'W' && colors[i+1] === 'R'){
      indices.push(i)
    }
  }
  return indices;
}

function firstW(colors, st, ed){
  for(let i=st; i<= ed; i++){
    if(colors[i] === 'W') return i;
  }
}

function lastR(colors, st, ed){
  for(let i=ed; i>=st; i--){
    if(colors[i] === 'R') return i;
  }
}


main(require('fs').readFileSync('/dev/stdin', 'utf8').trim());
