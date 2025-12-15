function main(arg) {
	var data = arg.trim().split("\n")[1].split(" ").map(Number)
	var t = data[0]
	var ans = 0
	for (var i = 0;i < data.length; i++) {
		if (data[i] >= t) {
			ans++
		}
		t = Math.max(data[i], t)
	}
	console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));