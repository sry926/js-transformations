'use strict'

const main = input => {
	const args = input.split('\n').map(t => t.split(' '))
	const a = args[0].map(t => parseInt(t, 10))
	const k = parseInt(args[1][0], 10)

	for (let i = 0; i < k; i++) {
		let tmpMax = 0
		let tmpIndex = -1

		for (let j = 0; j < 3; j++) {
			if (a[j] > tmpMax) {
				tmpMax = a[j]
				tmpIndex = j
			}
		}

		a[tmpIndex] *= 2
	}

	let sum = 0

	for (let i = 0; i < 3; i++) {
		sum += a[i]
	}

	console.log(sum)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
