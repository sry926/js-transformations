const main = (input) => {
  input = input.trim().split('\n')
  const [, k] = input[0].split(' ').map(Number)
  const logs = input[1].split(' ').map(Number).sort((a, b) => b - a)
  let small = 0
  let big = logs[0]
  let mid = Math.floor((big-small)/2) + small

  let ans = logs[0]

  while (true) {
    if (judge(logs, mid, k)) {
      ans = Math.min(ans, mid)
      const newMid = Math.floor((mid - small) / 2) + small
      if (newMid === mid) break
      big = mid
      mid = newMid
    } else {
      const newMid = Math.floor((big - mid) / 2) + mid
      if (newMid === mid) break
      small = mid
      mid = newMid
    }
  }

  return console.log(ans)
}

const judge = (logs, max, k) => {
  if (logs[0] <= max) return true

  let count = 0
  for (let i=0; i<logs.length; i++) {
    let s = logs[i]
    while (s > max) {
      s -= max
      count++
    }
    if (count > k) return false
  }

  return count <= k

  // const _logs = JSON.parse(JSON.stringify(logs))
  // for (let i=0; i<k; i++) {
  //   if (_logs[0] <= max) return true
  //
  //   if (_logs[0] - max > max) _logs[0] -= max
  //   else _logs.shift()
  // }
  //
  // return (_logs[0] <= max || !_logs.length)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))