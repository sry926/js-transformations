"use strict";
const Main = (input) =>{
   let xs = input.trim().split(' ').map(v=>parseInt(v,10));   
   let candy = xs.sort((a, b) => b - a);
   //console.log(candy);
   let result = 0;                                    
     for(let i =1; i<xs.length; i++){
   	    result +=candy[i];
      }
  //console.log(result);
   //console.log(candy[0]);
   if(result==candy[0]){
     console.log("Yes");
   }else{
   	 console.log("No");
   }
     
}
Main(require('fs').readFileSync('/dev/stdin','utf8'));