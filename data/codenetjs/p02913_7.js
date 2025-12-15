function Main(input) {
  input=input.split("\n");
  const N=input[0].split(' ')[0]-0;
  const S=input[1];
  var candidate=[];
  var max=0;
  for(var i=0;i<S.length;i++){
    for(var j=0;j<candidate.length;j++){
      candidate[j].forEach(e=>{
        //console.log(e,i,j,S[i],S[i+e-j]);
        if(S[i]!==S[i+e-j]||i+e-j>=j){
          //console.log(i-j);
          max=Math.max(max,i-j);
          candidate[j]=candidate[j].filter(f=>{
            return f!==e;
          });
        }
      });
    }
    candidate.push([]);
    for(var j=0;j<i;j++){
      if(S[i]===S[j]){
       candidate[i].push(j);
      }
    }
    
    //console.log(candidate);
  }
  for(var j=0;j<candidate.length;j++){
    candidate[j].forEach(e=>{
      max=Math.max(max,N-j);
    });
  }
  console.log(max);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  
  
