function main(arg) {
	var tmp = arg.split("\n")[0].split(" ").map(e => Number(e))
	var N = tmp[0]
	var A = tmp[1]
	var B = tmp[2]

	var max = 0
	if (A < B) {
		max = A
	} else {
		max = B
	}

	var min = 0
	if (A + B > N) {
		min = Math.abs(N - (A + B))
	} 
	console.log(max + " " + min)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));