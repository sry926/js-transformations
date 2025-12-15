function Main(input) {
  var tmp = input.split(' ')
  var L = parseInt(tmp[0])
  var R = parseInt(tmp[1])

  var result = 2019
  var temp = 0

  for (var i = 0; i < R - L; i++) {
    var num = L + i
    for (var j = 0; j < R - L - i; j++) {
      temp = num * (L + i + j + 1)
      if (temp % 2019 < result) {
        result = temp % 2019
      }
    }
    if (result === 0) {
      break
    }
  }

  console.log('%d', result)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
