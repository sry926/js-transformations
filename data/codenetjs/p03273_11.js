function main(input) {
  const args = input.split('\n');
  const ary1 = args[0].split(' ').map(n => parseInt(n, 10));
  const H = ary1[0];
  const W = ary1[1];
  let aryChars = [];
  let delCols = [];
  let delRows = [];
  let ansAry = [];
  
  //二次元配列作成
  for (let i = 1; i <= H; i++) {
    ary = args[i].split('');
    aryChars.push(ary);
  }
  
  //削除するColのインデックスを探す
  for (let x = 0; x < W; x++) {
    cnt = 0;
    for (let y = 0; y < H; y++) {
      if (aryChars[y][x] === '.') { cnt++; }
      if (cnt === H) { delCols.push(x); }
    }
  }
  
  //削除するRowのインデックスを探す
  for (let y = 0; y < H; y++) {
    cnt = 0;
    for (let x = 0; x < W; x++) {
      if (aryChars[y][x] === '.') { cnt++; }
      if (cnt === W) { delRows.push(y); }
    }
  }
  
  //Col削除の時は後ろから消したいので降順にソートしておく
  delCols.sort(function(a, b) {
    return b - a;
  });
  
  delRows.sort(function(a, b) {
    return b - a;
  });
  
  //Row削除
  for (let i = 0; i < delRows.length; i++) {
    aryChars.splice(delRows[i], 1);
  }
  
  //Col削除
  for (let i = 0; i < aryChars.length; i++) {
    for (let j = 0; j < delCols.length; j++) {
      aryChars[i].splice(delCols[j], 1);
    }
  }
  
  /**
  console.log(delRows);
  console.log(delCols);
  **/
  
  for (let i = 0; i < aryChars.length; i++) {
    console.log(aryChars[i].join(''));
  }
  
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));