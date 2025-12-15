function Main(input) {
  var tmp = input.trim().split('\n')
  var N = parseInt(tmp[0])

  var votedHash = {}
  for (var i = 1; i <= N; i++) {
    if (votedHash[tmp[i]]) {
      votedHash[tmp[i]] += 1
    } else {
      votedHash[tmp[i]] = 1
    }
  }

  var applyArr = []
  Object.keys(votedHash).forEach(elem => {
    applyArr.push(votedHash[elem])
  })

  var mostApply = Math.max.apply(null, applyArr)

  var resultArr = []
  Object.keys(votedHash).forEach(elem => {
    if (votedHash[elem] === mostApply) {
      resultArr.push(elem)
    }
  })

  var result = resultArr.sort().join('\n')

  console.log(result)
  return result
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))