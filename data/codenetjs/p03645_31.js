"use strict";
function Main(input) {
  var parseInputData = parseInput(input);
  const result = canReachCheck(parseInputData.shipVariations, parseInputData.goalIsland);
  isPossibleCheck(result);
  
}
var parseInput = (input) => {
  input = input.split("\n");
  const lines = input[0].split(" ");
  //島のゴールを格納
  const goalIsland = parseInt(lines[0], 10);
  //船の数を格納
  const shipCount = parseInt(lines[1], 10);
  var shipVariations = parseShipVariations(shipCount,input);
  // return [shipVariations, goalIsland];
  return { shipVariations: shipVariations, goalIsland: goalIsland };
}

//島に到着するかを確認する関数
var canReachCheck = (shipVariations,goalIsland) => {
  for(var variationIndex1=0; variationIndex1<shipVariations.length; variationIndex1++){
    if(shipVariations[variationIndex1][0]=== 1 ){
      for(var variationIndex2=0; variationIndex2<shipVariations.length; variationIndex2++){
        if(parseInt(shipVariations[variationIndex2][0])===parseInt(shipVariations[variationIndex1][1])){
          if(parseInt(shipVariations[variationIndex2][1])===goalIsland){
            return true;
            break;
          }
        }
      }
    }
  }
  return false;
}

//booleanを判別する関数
var isPossibleCheck = (isPossible) => {
  if(isPossible){
    console.log('POSSIBLE');
  }
  else{
    console.log('IMPOSSIBLE'); 
  }    
}

//船の特徴を配列に格納する関数
var parseShipVariations = (shipCount,lines) => {
  return lines.slice(1, shipCount+1).map(line => line.split(" ").map(x => parseInt(x)));
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));