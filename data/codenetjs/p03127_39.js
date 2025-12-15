function main(input) {
  var n = input[0]-0
  var m = input[1].split(" ");

  var ans = m.sort((a,b)=>a-b);
  while(ans.length>1){
    var newans = [];
    newans.push(ans[0]-0);
    for(var i=1;i<ans.length;i++){
      var tmp = ans[i]%ans[0];
      if(tmp>0) newans.push(tmp);
    }
    ans = newans.sort((a,b)=>a-b);
  }
  console.log(ans[0]);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
