'use strict'

function Main(input) {
  const G = input.split("\n").slice(1)

  let ans = 0
  let startB = 0
  let endA = 0
  let bothAB = 0

  for (let str of G) {
    ans += (str.split("AB")).length - 1
    if (str.substr(0, 1) === "B" && str.substr(-1, 1) === "A") {
      bothAB++
    } else if (str.substr(0, 1) === "B") {
      startB++
    } else if (str.substr(-1, 1) === "A") {
      endA++
    }

    if (bothAB > 0) {
      if ((startB > 0 || endA > 0) || bothAB > 1) {
        bothAB--
        startB++
        endA++
      }
    }

    while (startB > 0 && endA > 0) {
      startB--
      endA--
      ans++
    }
  }
  
  console.log(ans)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim())
