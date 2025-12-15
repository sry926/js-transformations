"use strict";
const Main = (input) => {
	let xs = input.trim().split(',').toString();
    let A = Number(xs[0] + xs[1]);
    let B = Number(xs[2] + xs[3]);
    
    if(A > 13 && B < 13 && A != 0 && B != 0){
       console.log('YYMM');
	}else if(A < 13 && B > 13 && A != 0 && B != 0){
       console.log('MMYY');
    }else if(A > 13 || B > 13 || A == 0 || B == 0){
       console.log('NA');
    }else if(A < 13 && B < 13 && A != 0 && B != 0){
       console.log('AMBIGUOUS');
    }
}
Main(require('fs').readFileSync('/dev/stdin','utf8'));