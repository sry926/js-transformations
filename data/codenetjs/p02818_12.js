function permutation(n,k){
    var ret=[[]];
    var next;
    for(var i=0;i<k;i++){
        next=[];
        ret.forEach(e=>{
            for(var k=1;k<=n;k++){
                if(!e.includes(k)){
                    next.push(e.concat([k]));
                }
            }
        });
        ret=next.concat([]);
    }
    return ret;
}

function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const A=input[0].split(' ')[0]-0;
  const B=input[0].split(' ')[1]-0;
  const K=input[0].split(' ')[2]-0;
  if(K>A){
    console.log('0',Math.max(0,A+B-K));
  }else{
    console.log(A-K,B);
  }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  



  
