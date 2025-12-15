// inputに入力データ全体が入る
function Main(input) {
	var count=0;
	var h=parseInt(input,10);
  	var ans=0;
  	if(h<=1){
    	if(h=0){
        	console.log('0');
        }else{
          	console.log('1');
        }
    }else{
    	for(;;){
          	h=Math.floor(h/2);
        	count=count+1;
          	if(h==1){
            	break;   
            }
        }
      	for(i=0;i<count+1;i++){
           	ans=ans+Math.pow(2, i);
          //console.log('%d %d %d',ans,i,count);
       	}
      console.log('%d',ans);
      
      
      
      
      
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
