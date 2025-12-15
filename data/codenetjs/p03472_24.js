"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N  = parseInt(arg[0].split(" ")[0]);
    let H  = parseInt(arg[0].split(" ")[1]);
    const ab = arg.slice(1, N + 1).map(n=>n.split(" "));
    
    let strongestPoint = 0;
    let strongestIndex = 0;
    let throwSum = 0;
    let notUsed  = 0;
    
    for(let i in ab) {
        const a = parseInt(ab[i][0]);
        const b = parseInt(ab[i][1]);
        
        throwSum += b;
        
        if(a > strongestPoint) {
            strongestIndex = i;
            strongestPoint = a;
        }
    }

    let strongestKatana = ab[strongestIndex];

    
    // 通常攻撃が弱い刀をふる必要はない
    // 最強の刀以外は全部投げる
    // ただし、投げる攻撃力も最強の刀の通常攻撃に劣るならまったく使わない方が良い
    for(let i in ab) {
        if(ab[i][1] < ab[strongestIndex][0]) {
            throwSum -= ab[i][1];
            notUsed++;
        }
    }

    const restHP = H - throwSum;

    // 最強の刀の振る回数
    const strongestAttacks = Math.ceil(restHP / ab[strongestIndex][0]);
    
    console.log(strongestAttacks + (N - notUsed));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));