

function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0]);
  var P = [[[0]],[[1]]];
  for(var i=1;i<N;i++){
    var P2=new Array();
    for(var k=0;k<P.length;k++){
      var Psub1 = [...P[k],[0]];
      var Psub2 = [...P[k],[1]];
      P2.push(Psub1);
      P2.push(Psub2);
    }
    P=[...P2];

  }
  var ans=0;
  input.shift();
  var anssub=new Array();
  var I = input.map(i => i.split(" "));
  for(var i=0;i<P.length;i++){
    var flag=0;
    var cnt=0;
    for(var k=0;k<I.length;k++){
      if(I[k].length==1){
        if(P[i][cnt]==1){
          flag=1;
        }else{
          flag=0;
        }
        cnt++;
      }else if(I[k][0]!=""){
        if(flag==1){
          if(P[i][I[k][0]-1]!=I[k][1]){
            break;
          }
        }
      }
      if(k==I.length-1){
        anssub.push(P[i]);
      }
    }
  }
  for(var i=0;i<anssub.length;i++){
    var cnt2=0;
    for(var k=0;k<N;k++){
      if(anssub[i][k]==1){
        cnt2++;
      }
      
    }
    ans=Math.max(cnt2,ans);
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