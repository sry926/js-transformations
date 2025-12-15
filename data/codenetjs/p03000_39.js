'use strict'

const main = input => {
	const args = input.split('\n').map(arg => arg.split(' '))
	const n = parseInt(args[0][0], 10)
	const x = parseInt(args[0][1], 10)
	const l = args[1].slice(0, 4).map(arg => parseInt(arg, 10))
	const d = new Array(n + 1)

	d[0] = 0
	let cnt = 1

	for (let i = 1; i < n + 1; i++) {
		d[i] = d[i - 1] + l[i - 1]
		if (d[i] <= x) cnt++
	}

	console.log(cnt)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
