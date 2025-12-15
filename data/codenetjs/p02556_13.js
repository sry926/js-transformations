const main = (input) => {
  input = input.split("\n")
  var N=Number(input[0]);
  let point=[];
  for (var i=1; i<=N;i++){
    value =input[i].split(" ").map(n=>Number(n));

     // 同じ食い合わせは削除。
    if (point.indexOf(value)==-1){
      point.push(value);
    }
  }

  let dist = [];
  for (var i=0; i<point.length; i++){
    for (var j=i+1; j<point.length;j++){
      dist.push(Math.abs(point[i][0]-point[j][0])+Math.abs(point[i][1]-point[j][1]));
    }
  }
  dist.sort((a,b)=>b-a);

  console.log(dist[0]);
  };
  
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

