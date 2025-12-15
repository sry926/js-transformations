// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    tmp0 = input[0].split(" ");
    N = Number(tmp0[0]);
    T = Number(tmp0[1]);
 // console.log(N,T);

    var ans=1001;
    for(i=1;i<=N;i++){
          tmp1 = input[i].split(" ");
          if(T>= Number(tmp1[1])){
                     c = Number(tmp1[0]);
                     ans= Math.min(ans,c);}
                        }
  
     if(ans==1001){console.log('TLE');} 
       else{console.log(ans);} 
     }        

    
  //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
//   