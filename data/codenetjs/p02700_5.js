"use strict";

function main(arg) {
    //    console.log(arg.trim().split("\n"));
    let ary = arg.trim().split(" ").map(n => Number(n));
    let THp = ary.shift();
    let TAt = ary.shift();
    let AHp = ary.shift();
    let AAt = ary.shift();
    // Takahashi Atack 回数
    let TX = Math.ceil(AHp/TAt);
    let AX = Math.ceil(THp/AAt);

    console.log((TX<=AX) ? 'Yes' : 'No');

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


