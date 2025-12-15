"use strict";

function Main(input) {
	let textNum = input.split('\n')[0]*1;
  	let text = input.split('\n')[1];
  	let ans = 0;
  	for(let i =0; i< textNum - 2; i++){
    	if(text[i]== "A" 
           && text[i + 1]== "B"
           && text[i + 2]== "C"
        ){
        	ans++;
        }
    }
  	console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));