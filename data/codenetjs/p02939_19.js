const Main = (input) => {
  const Sarr = input.trim()

  var count = 0
  var tmp = ''
  var current = ''
  var resultArr = []

  for (var j = 0; j < Sarr.length; j++) {
    current += Sarr[j]

    if (current === tmp) continue

    tmp = current
    resultArr.push(current)

    current = ''
    count += 1
  }

  var result = resultArr.length

  console.log(result)
  return result
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))