function Main(input){
    xs = input.trim().split('');    
    count = '';
	for(var i = 0; i < xs.length; i++){
    	if(xs[i] === 'o'){
        count = count + 'o'
        } 
    }
    var ans = count.length;
    console.log(700 + ans*100 + 0);  
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));