    // parameter "input" gets all data
    function Main(input) {
    	// the first line is assigned to input[0], the second line is assigned to input[1] similarly.
    	var splitInput = input.split("\n");
    	var n = (splitInput[0])
    	var plateArray = splitInput.slice(1).map(function(e){
    		var splitab = e.split(" ")
    		return [parseInt(splitab[0]),parseInt(splitab[1]),parseInt(splitab[0])+parseInt(splitab[1])]
    	}).sort(function(x,y) {
    		if (x[2] > y[2]) {
    			return -1;
    		}
    		if (x[2] < y[2]) {
    			return 1;
    		}
    		  return 0;
    	})
    	
    	var aresult = 0
    	var bresult = 0
    	
    	for (var i=0; i<n; i++){
    		if (i%2 == 0) {
    			aresult += plateArray[i][0]
    		} else {
    			bresult += plateArray[i][1]
    		}
    	}
    	
    	//output
    	console.log('%d',aresult-bresult);
    }
    // Don't edit this line!
    Main(require("fs").readFileSync("/dev/stdin", "utf8"));