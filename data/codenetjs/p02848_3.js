'use strict'

const main = input => {
	const args = input.split('\n').map(arg => arg.split(' '))
	const N = parseInt(args[0][0], 10)
	const S = args[1][0]
	let ans = ''

	for (let i = 0; i < S.length; i++) {
		const c = S[i]
		let t1 = c.charCodeAt()
		let t2 = ((t1 - 65) + N) % 26 + 65
		ans += String.fromCharCode(t2)
	}

	console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
