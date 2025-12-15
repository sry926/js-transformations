function main(input) {
  var H = input[0].split(" ")[0]-0;
  var W = input[0].split(" ")[1]-0;
  var list = [];
  for(var i=0;i<H;i++){
    if(input[i+1].indexOf("#") >= 0){
      list.push(input[i+1].split(""));
    }
  }
  var ans = [];
  for(var i=0;i<W;i++){
    var flg = !!list.find(v=>v[i]=="#");
    if(flg) ans.push(i);
  }
  var anstxt = "";
  list.forEach(w=>{
    ans.forEach(v=>{
      anstxt+=w[v];
    });
    anstxt+="\n";
  });

  console.log(anstxt);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
