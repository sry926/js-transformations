function calc(index, l, cost, Ai, C, X) {
  const A = Ai[index]
  const c = C[index]
  // console.log('input:', index, A, l, cost)
  cost += c
  let ok = true
  for(let i = 0; i < l.length; i++) {
    l[i] += A[i]
    if (l[i] < X) {
      ok = false
    }
  }
  // それ以下のものを計算

  // console.log('calced', index, A, l, cost, ok)

  if (ok) {
    return cost
  }
  if (index === C.length - 1) {
    return -1
  }

  let min = -1
  for (let i = index + 1; i < C.length; i++) {
    // console.log('recursive', index, i)
    let _min = calc(i, Array.from(l), cost, Ai, C, X)
    if (_min === -1) continue
    if (min === -1) {
      min = _min
    }
    min = min < _min ? min : _min
    // console.log('min:', min)
  }
  return min
}

function main(input) {
  const inputs = input.trim().split('\n')
  let [N, M, X] = inputs[0].split(' ').map(Number)
  let C = []
  let Ai = inputs.slice(1).map(e => {
    const [c, ...ai] = e.split(' ').map(Number)
    C.push(c)
    return ai
  })

  // console.log('log')
  // console.log(N, M, X)
  // console.log(C)
  // console.log(Ai)
  // 総当り 12冊しかないの

  let min = -1

  // すべての本について1冊からM冊まで計算、 最小の値を取得する/
  for(let i = 0; i < N; i++) {
    let _min = calc(i, Array.from(new Array(M)).map(e => 0), 0, Ai, C, X)
    // console.log('root:', _min)
    if (_min === -1) continue
    if (min === -1) {
      min = _min
    }
    min = min < _min ? min : _min
  }
  console.log(min)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
