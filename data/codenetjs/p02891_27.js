const lineList = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n')

const s = lineList[0]
const k = parseInt(lineList[1])

var blockList = s.match(/(.)\1*/g)

var total = 0
var head = blockList[0]
var tail = blockList[blockList.length-1]

if(blockList.length === 1) {
  total = Math.floor(blockList[0].length * k  / 2)
} else if(head[0] === tail[0] && head.length % 2 === 1 && tail.length % 2 === 1) {
  blockList.pop()
  blockList.unshift()
  total = blockList.reduce((acc, e, i) => Math.floor(acc + e.length / 2), 0) * k
  total += Math.floor(head.length / 2)
  total += Math.floor(tail.length / 2)
  total += Math.floor((head.length + tail.length) / 2) * (k - 1)
} else {
  total = blockList.reduce((acc, e, i) => acc + (e.length - e.length % 2) / 2, 0) * k
}

console.log(total)
