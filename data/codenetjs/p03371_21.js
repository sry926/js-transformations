
function Main(input){
	input=input.trim().split(" ");
	A = parseInt(input[0],10);
	B = parseInt(input[1],10);
	C = parseInt(input[2],10);
	var X = parseInt(input[3],10);
	var Y= parseInt(input[4],10);
	var nA, nB, nAB, ans;
	nA = nB = nAB =0;
	function price (nA, nB, nAB){
		return nA * A + nB * B + nAB * C;
	}

	
	if (A >= (2 * C)){
		if (B >= (2 * C)){
			if (X > Y){
				nAB = (Y * 2) + ((X - Y ) * 2);
			} else {
				nAB = (X * 2) + ((Y - X ) * 2);
			}
		} else {
			nAB = X * 2;
			nB = Math.max(Y - X, 0);
		}
	} else {
		if (B >= (2 * C)){
			nAB = Y * 2;
			nA = Math.max(X - Y, 0);
		} else {
			if (A + B > (2 * C)){
				if (X > Y){
					nAB = Y * 2;
					nA = X - Y;
				} else  {
					nAB = X * 2;
					nB = Y - X;
				}
			} else {
				nA = X;
				nB = Y;
			}
		}
	}
	console.log (price(nA, nB, nAB));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
