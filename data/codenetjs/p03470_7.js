'use strict'

function Main(input) {
  const inputList = input.split('\n');
  const n = inputList[0]
  const numberList = inputList.slice(1)

  const uniqueNumberList = new Set(numberList)

  console.log(uniqueNumberList.size)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));