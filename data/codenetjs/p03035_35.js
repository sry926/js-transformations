const main = stdin => {
  const input = stdin.trim().split('\n')

  const [A, B] = input[0].split(' ').map(x => parseInt(x))

  if (A <= 5) {
    console.log(0)
  } else if (A <= 12) {
    console.log(B / 2)
  } else {
    console.log(B)
  }

}
// 標準入力
main(require("fs").readFileSync("/dev/stdin", "utf8"))
