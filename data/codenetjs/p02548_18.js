function Main(input) {

	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n").filter(Boolean);
    
    let N = Number(input[0]);
    let ans = 0;
    
    for (let C = 1; C < N; C++) {
        let nc = N - C;
        for (let A = 1; A ** 2 + C <= N; A++) {
            if (nc % A === 0) {
                if (nc === A ** 2) ans++;
                else ans += 2;
            }
        }
    }
    
    console.log(ans);
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));