'use strict'

const main = input => {
	const args = input.split('\n')
	if (args[0][0] === args[1][2] && args[0][1] === args[1][1] && args[0][2] === args[1][0]) console.log('YES')
	else console.log('NO')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
