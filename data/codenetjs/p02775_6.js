function Main(input) {
  input = input.split("\n");
  var N = input[0].split("").map(i=>parseInt(i));
  var ans =0;
  for(var i=N.length-1;i>=0;i--){
    if(N[i]<=4){
      ans+=N[i];
    }else if(N[i]==5){
      if(N[i-1]<=4){
        ans+=N[i];
      }else{
        ans+=N[i];
        N[i-1]++;
      }
    }else{
      ans+=(10-N[i])
      if(i!=0){
        if(N[i-1]!=9){
          N[i-1]++;
        }else{
          var j=i-1;
          while(true){
            if(N[j]==9){
              N[j]=0;
              if(j==0){
                ans++;
              }
            }else{
              N[j]++;
              break;
            }
            j--;
          }
        }
      }else{
        ans++;
      }
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