function Main(input){
  input = input.trim().split('\n').map(x=>x.split(' ').map(y=>parseInt(y)));
  const inf = 100000000
  var ans = inf;
  for (let i=0;i<2**input[0][0];i++){
    var toRead = binary(i,input[0][0]);
    var skill = Array(input[0][1]).fill(0);
    var price = 0
    for (let j=0;j<toRead.length;j++){
      if (toRead[j] == '1'){
        price += input[j+1][0];
      }
    }
    if (price < ans){
      for (let j=0;j<toRead.length;j++){
        if (toRead[j] == '1'){
          for (let k=0;k<skill.length;k++){
            skill[k] += input[j+1][k+1];
          }
        }
      }
      var ok = 1
      for (let j=0;j<skill.length;j++){
        if (skill[j] < input[0][2]){
          ok = 0;
          break;
        }
      }
      if (ok == 1){
        ans = price;
      }
    }
  }
  if (ans == inf){
    ans = -1;
  }
  console.log(ans)
}

function binary(num, digits){
  var a = num.toString(2);
  var l = a.length
  for (let j=0;j < digits - l;j++){
    a = '0' + a;
  }
  return a
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));