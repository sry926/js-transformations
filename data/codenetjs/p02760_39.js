function Main(input) {
  args = input.split('\n')
  const square = []
  for(var i = 0; i < 3; i++){
    square[i] = args[i].split(' ')
  }
  
  const count = args[3]
  const nums = []
  for(var i = 0; i < count; i++){
    nums.push(args[i + 4])
  }
  
  // Ai,jとbnを比較
  const results = []
  for(var i = 0; i < 3; i++){
    results.push([0, 0, 0])
  }
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      for(var k = 0; k < nums.length; k++){
        if(square[i][j] === nums[k]) {
          results[i][j] = 1
        }
      }
    }
  }
  
  // ビンゴかどうかをチェック - タテヨコ
  var bingoCount = 0
  var checkedCountAngleRight = 0
  var checkedCountAngleLeft = 0
  for(var i = 0; i < 3; i++) {
    var checkedCountHorizontal = 0
    var checkedCountVertical = 0
    for(var j = 0; j < 3; j++) {
      // ヨコ
      if(results[i][j]) checkedCountHorizontal++
      // タテ
      if(results[j][i]) checkedCountVertical++
    }
    // 右ナナメ
    if(results[i][i]) {
      checkedCountAngleRight++
    }
    // 左ナナメ
    if(results[i][2-i]) {
      checkedCountAngleLeft++
    }
    
    if(checkedCountHorizontal === 3) {
      bingoCount++
    }
    if(checkedCountVertical === 3) {
      bingoCount++
    }
  }
  if(checkedCountAngleRight === 3) {
    bingoCount++
  }
  if(checkedCountAngleLeft === 3) {
    bingoCount++
  }
  if(bingoCount) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))
