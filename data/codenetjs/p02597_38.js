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
  const [n] = readLine().split(/\s/).map(Number)
  const cs = Array.from(readLine())
  let s = 0, e = n - 1
  let result = 0
  while (s < e) {
    let wFound = false
    for (let i = s; i < e; i++) {
      if (cs[i] === 'R') {
        continue
      }
      wFound = true
      for (let j = e; j > i; j--) {
        if (cs[j] === 'W') {
          continue
        }
        e = j - 1
        result += 1
        break
      }
      s = i + 1
      break
    }
    if (!wFound) {
      break
    }
  }
  console.log(result)
}