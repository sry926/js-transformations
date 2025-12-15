'use strict'

main()

function main (input) {
  readInput()
  .then(parseInput)
  .then(calc)
}

function calc (input) {
  let n = input[0][0]
  let m = input[0][1]
  let a = [0]
  let b = [0]
  for (let i = 1; i <= m; i++) {
    a[i] = input[i][0]
    b[i] = input[i][1]
  }
  let cities = new Array(n + 1).fill(0)
  for (let i = 1; i <= m; i++) {
    cities[a[i]]++
    cities[b[i]]++
  }
  for (let i = 1; i <= n; i++) {
    console.log(cities[i])
  }
}

function parseInput (inputRaw) {
  let input = inputRaw.split('\n').map(row => row.split(' ').map(Number))
  return input
}

function readInput () {
  return new Promise((resolve) => {
    let inputArr = []
    process.stdin.resume()
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', (chunk) => {
      inputArr.push(chunk)
    })
    process.stdin.on('end', () => {
      let input = inputArr.join('').trim()
      resolve(input)
    })
  })
}
