const main = input => {
  const [a, b, c] = input.trim().split(' ').map(x => parseInt(x))
  if (a + b === c || a + c === b || b + c === a) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

// 標準入力
main(require("fs").readFileSync("/dev/stdin", "utf8"))
