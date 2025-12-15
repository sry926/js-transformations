const main = (input) => {
  input = input.trim().split('\n')
  const [h, w, m] = input[0].split(' ').map(Number)

  const hs = new Array(h).fill(0)
  const ws = new Array(w).fill(0)
  const bomb = new Map()

  for (let i=1; i<=m; i++) {
    const [hi, wi] = input[i].split(' ').map(Number)
    hs[hi-1] = hs[hi-1] ? hs[hi-1]+1 : 1
    ws[wi-1] = ws[wi-1] ? ws[wi-1]+1 : 1
    bomb.set(`${hi-1}:${wi-1}`, true)
  }

  const hmx = Math.max(...hs)
  const wmx = Math.max(...ws)

  const topH = []
  const topW = []
  for (let i=0; i<Math.max(hs.length, ws.length); i++) {
    if (hs[i] && hs[i] === hmx) topH.push([i, hmx])
    if (ws[i] && ws[i] === wmx) topW.push([i, wmx])
  }

  // const hs = {}
  // const ws = {}
  //
  // const bomb = new Map()
  //
  // for (let i=1; i<=m; i++) {
  //   const [hi, wi] = input[i].split(' ').map(Number)
  //   hs[hi-1] = ~~hs[hi-1] + 1
  //   ws[wi-1] = ~~ws[wi-1] + 1
  //   bomb.set(`${hi-1}:${wi-1}`, true)
  // }

  // const ascH = [...Object.entries(hs)].sort((a, b) => b[1] - a[1])
  // const ascW = [...Object.entries(ws)].sort((a, b) => b[1] - a[1])
  //
  // const topH = [ascH.shift()]
  // const topW = [ascW.shift()]
  // while (ascH[0] && topH[0][1] === ascH[0][1]) topH.push(ascH.shift())
  // while (ascW[0] && topW[0][1] === ascW[0][1]) topW.push(ascW.shift())

  for (let x=0; x<topH.length; x++) {
    for (let y=0; y<topW.length; y++) {
      if (!bomb.has(`${topH[x][0]}:${topW[y][0]}`)) return console.log(hmx + wmx)
    }
  }

  return console.log(hmx + wmx - 1)
  // return console.log(topH[0][1] + topW[0][1] - 1)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))