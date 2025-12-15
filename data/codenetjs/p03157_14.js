function Main(input) {
  input = input.split("\n");
  var H = parseInt(input[0].split(" ")[0]);
  var W = parseInt(input[0].split(" ")[1]);
  S = new Array(H);
  for(var i=0;i<H;i++){
    S[i]=input[i+1].split("");
  }
  var ans=0;
  map=new Array();
  for(var i=0;i<H;i++){
    mapsub=new Array(W).fill(0);
    map[i]=mapsub;
  }
  queue=new Array();
  list=new Array();
  for(var i=0;i<H;i++){
    for(var j=0;j<W;j++){
      if(S[i][j]=="#"){
        if(i<H-1){
        queue.push([i+1,j,S[i][j]]);
        }
        if(j<W-1){
        queue.push([i,j+1,S[i][j]]);
        }
        if(i>0){
        queue.push([i-1,j,S[i][j]]);
        }
        if(j>0){
          queue.push([i,j-1,S[i][j]]);
        }
      }
      while(queue.length!=0){
        if(S[queue[0][0]][queue[0][1]]!=queue[0][2]){
          if(map[queue[0][0]][queue[0][1]]!=1){
            if(queue[0][2]=="#"){
            ans++;
            }
            if(queue[0][0]<H-1){
              queue.push([queue[0][0]+1,queue[0][1],S[queue[0][0]][queue[0][1]]]);
            }
            if(queue[0][1]<W-1){
              queue.push([queue[0][0],queue[0][1]+1,S[queue[0][0]][queue[0][1]]]);
            }
            if(queue[0][0]>0){
              queue.push([queue[0][0]-1,queue[0][1],S[queue[0][0]][queue[0][1]]]);
            }
            if(queue[0][1]>0){
              queue.push([queue[0][0],queue[0][1]-1,S[queue[0][0]][queue[0][1]]]);
            }
            map[queue[0][0]][queue[0][1]]++;
          }

        }
        queue.shift();
      }
      for(var l=0;l<H;l++){
        mapsub=new Array(W).fill(0);
        map[l]=mapsub;
      }
    }
  }


  console.log('%s', ans);
}
  
// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
function debug(){
  var input = document.getElementById("input").value;
  Main(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

