function Main(input) {

	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    
    let N = Number(input[0]);
    
    let pow_10 = myPow(10n,BigInt(N),10n ** 9n + 7n);
    let pow_9 = myPow(9n,BigInt(N),10n ** 9n + 7n);
    if(pow_9 < 0n) pow_9 += (10n ** 9n + 7n);
    let pow_8 = myPow(8n,BigInt(N),10n ** 9n + 7n);
    
    let ans = pow_10 - 2n * pow_9 + pow_8;
    if(ans < 0n) ans += (10n ** 9n + 7n);
    
    console.log(ans.toString());
    
}

function myPow(x, n, m){
  if(n == 0)
    return 1n;
  if(n % 2n == 0)
    return myPow(x * x % m, n / 2n, m);
  else
    return x * myPow(x, n - 1n, m) % m;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));