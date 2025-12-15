'use strict'

const main = arg => {
    var input = arg.trim().split("\n");
    var config = input[0].split(" ").map(str => parseInt(str, 10));
    const n = config[0];
    const ratio = config.slice(1);
    const data = input.slice(1, n+1);
    var best = [];

    function calcu(str, result, i){
        if(n <= i || !str){ return; } 
        const theData = str.split(" ").map(str => parseInt(str, 10));
        result.push({ 
            a: theData[0], 
            b: theData[1], 
            cost:theData[2]
        });
        const sum = result.reduce((a, b) => a + b.cost, 0);
        const aCost = result.reduce((a1, b1) => a1 + b1.a, 0);
        const bCost = result.reduce((a1, b1) => a1 + b1.b, 0);
        var bestCost;
        if(best.length > 0){
            bestCost = best.reduce((a, b) => a + b.cost, 0);   
        }

        //指定回数前ですでにコストオーバーの場合
        if(bestCost && sum > bestCost){
            return;
        }

        //回数指定完了
//        if(maxYakusu(aCost, bCost) === `${ratio[0]} ${ratio[1]}`){
          if(aCost*ratio[1] === bCost*ratio[0]){
            //bestと比較
            if(best.length === 0 || (bestCost && (sum < bestCost)) ){
                best = result;
            }
        } else {
            calcu(data[i+1], result, ++i);
        }
    }

    data.forEach((str,i) => {
        var result = [];
        calcu(str, result, i);
    });

    console.log(best.length === 0 ? -1 : best.reduce((a, b) => a + b.cost, 0));
}


main(require('fs').readFileSync('/dev/stdin', 'utf8'));
