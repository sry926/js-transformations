// inputに入力データ全体が入る
function Main(input) {
  var S = input;
  var arrayS = S.split('');
  var arrayR = [];

  for(var i=0; i < arrayS.length; i++){
    if(i == 0){
      arrayR.push(arrayS[i]);
    }
    else if(arrayS[i] == arrayS[i+1]){
      arrayR.push(`${arrayS[i]}${arrayS[i+1]}`);
      i++;
    }
    else if(arrayS[i] != arrayS[i+1]){
      arrayR.push(arrayS[i]);
    }
  }
  console.log(arrayR.length);
 }
 //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
 Main(require("fs").readFileSync("/dev/stdin", "utf8"));
