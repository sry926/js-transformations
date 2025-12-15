const main = stdin => {
  const input = stdin.trim().split('\n')
  const R = parseInt(input[0])

  if (R < 1200) {
    console.log('ABC')
  } else if (R < 2800) {
    console.log('ARC')
  } else {
    console.log('AGC')
  }
}


// 標準入力
main(require("fs").readFileSync("/dev/stdin", "utf8"))
