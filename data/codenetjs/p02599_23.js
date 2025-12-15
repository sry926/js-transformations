process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});
 
function readLine() {
    return inputString[currentLine++];
}

function main() {
  const [n, q] = readLine().split(/\s/).map(Number)
  const cs = readLine().split(/\s/).map(Number)
  const qs = []
  const qMap = []
  for (let i = 0; i < q; i++) {
    qs.push(readLine())
    const [l, r] = qs[i].split(/\s/).map(Number)
    if (!qMap[r]) {
      qMap[r] = []
    }
    qMap[r].push(l)
  }
  const lastIndices = Array(n + 1)
  const tree = Array(n + 1)
  const results = {}
  for (let r = 1; r <= n; r++) {
    const color = cs[r - 1]
    const last = lastIndices[color]
    lastIndices[color] = r
    if (last) {
      add(tree, n, last, -1)
    }
    add(tree, n, r, 1)
    if (qMap[r]) {
      const sumR = sum(tree, n, r)
      for (const l of qMap[r]) {
	    results[l + ' ' + r] = sumR - sum(tree, n, l - 1)
      }
    }
  }
  console.log(qs.map(q => results[q]).join('\n'))
}
function add(tree, n, i, delta) {
  for (; i <= n; i = i | (i + 1)) {
    tree[i] = (tree[i] || 0) + delta
  }
}
function sum(tree, n, r) {
  let result = 0;
  for (; r > 0; r = (r & (r + 1)) - 1) {
    result += (tree[r] || 0)
  }
  return result;
}