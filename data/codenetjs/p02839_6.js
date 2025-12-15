

function Main(input) {
  input = input.split("\n");
  var H = parseInt(input[0].split(" ")[0]);
  var W = parseInt(input[0].split(" ")[1]);
  var map = new Array(H);
  for(var i=0;i<H;i++){
    var sub2=new Array(W);
    for(var k=0;k<W;k++){
      var sub=new Array(6400).fill(0);
      sub2[k]=sub;
    }
    map[i]=sub2;
  }
  input.shift();
  input.splice(H*2,input.length);
  var zz = input.map(i=>i.split(" ").map(i=>parseInt(i)));
  var z = new Array(H);
  for(var i=0;i<H;i++){
    var sub3=new Array(W).fill(3200);
    z[i]=sub3;
  }
  for(var i=0;i<H;i++){
    for(var k=0;k<W;k++){
      z[i][k]=Math.abs(zz[i][k]-zz[i+2][k]);
    }
  }
  map[0][0][3200+z[0][0]]=1;
  map[0][0][3200-z[0][0]]=1;
  for(var i=0;i<H;i++){
    for(var j=0;j<W;j++){
      for(var k=0;k<6400;k++){
        if(i==0&&j==0){

        }else if(i==0&&j!=0){
          if(map[i][j-1][k]==1){
            map[i][j][k+z[i][j]]=1;
            map[i][j][k-z[i][j]]=1;
          }
        }else if(i!=0&&j==0){
          if(map[i-1][j][k]==1){
            map[i][j][k+z[i][j]]=1;
            map[i][j][k-z[i][j]]=1;
          }
        }else{
          if(map[i-1][j][k]==1||map[i][j-1][k]==1){
            map[i][j][k+z[i][j]]=1;
            map[i][j][k-z[i][j]]=1;
          }
        }
      }
    }
  }
  var ans=6400;
  for(var i=0;i<6400;i++){
    if(map[H-1][W-1][i]==1){
      ans=Math.min(ans,Math.abs(i-3200));
    }
  }

  console.log('%s', ans);
  return ans;
}

function debug(n){
  var input = document.getElementById("input"+n).value;
  var ans=Main(input);
  var result="WA";
  if(ans==document.getElementById("output"+n).value.split("\n")[0]){
    result="AC";
  }
  document.getElementById("result"+n).innerHTML=result;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));