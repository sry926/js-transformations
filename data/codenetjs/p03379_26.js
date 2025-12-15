
'use strict'

let L = []
let R = []
const merge = (A, left, mid, right) => {
  let n1 = mid - left
  let n2 = right - mid
  for (let i = 0; i < n1; i++) L[i] = A[left + i]
  for (let i = 0; i < n2; i++) R[i] = A[mid + i]
  L[n1] = R[n2] = Infinity
  let i = 0
  let j = 0
  let k = 0
  for (let k = left; k < right; k++) {
    if (L[i] <= R[j]) {
      A[k] = L[i++]
    } else {
      A[k] = R[j++]
    }
  }
}
const mergeSort = (A, left, right) => {
  if (left + 1 < right) {
    let mid = (left + right) >> 1
    mergeSort(A, left, mid)
    mergeSort(A, mid, right)
    merge(A, left, mid, right)
  }
}

function main(input) {
  input = input.split(/\n|\s/).map(v => ~~v)
  const n = input.shift()
  const arr = input //.slice(1, n + 1)
  let sorted = arr.slice(0)
  mergeSort(sorted, 0, n)

  const mid = sorted[n / 2]
  const mid2 = sorted[n / 2 - 1]

  for (let i = 0; i < n; i++) {
    if (arr[i] < mid) {
      console.log(mid)
    } else {
      console.log(mid2)
    }
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
