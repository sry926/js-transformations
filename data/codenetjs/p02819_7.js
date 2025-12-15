function main(input) {
  var x = input[0]-0;
  var sosulist = [2];
  var ans = 1;
  var i=2;
  if(x==2 || x==1){
    console.log(2);
    return;
  }
  start:while(true){
    i++;
    for(var j=0;j<sosulist.length;j++){
      if(i%sosulist[j]==0) continue start;
      if(Math.sqrt(i)<sosulist[j]) break;
    }
    sosulist.push(i);
    if(i>=x){ans = i; break;}
  }
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))
