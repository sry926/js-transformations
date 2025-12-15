process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", (input) => {
  const analyzed = analyzeInput(input);
  const resultValues = calc(analyzed.Ak, analyzed.Bk);
  const result = resultValues.join("\n");
  console.log(result);
});

const analyzeInput = (input) => {
  const lines = input.split("\n");
  const n = Number(lines[0][1]);
  const Ak = lines[1].split(" ").map((num) => Number(num));
  const q = Number(lines[2][1]);
  const Bk = lines.slice(3).map((line) => {
    return line.split(" ").map((num) => Number(num));
  });

  return {
    n: n,
    Ak: Ak,
    q: q,
    Bk: Bk,
  };
};

const calc = (Ak, Bk) => {
  let baseSum = Ak.reduce((total, value) => {
    return total + value;
  }, 0);
  const freqMap = Ak.reduce((map, val) => {
    const count = map[val] || 0;
    map[val] = count + 1;
    return map;
  }, {});

  return Bk.map(line => {
    const b = line[0];
    const c = line[1];

    const bCount = freqMap[b] || 0;
    const diff = baseSum + (c -b) * bCount;
    freqMap[b] = 0;
    freqMap[c] = (freqMap[c] || 0) + bCount;
    
    baseSum = diff;
    return diff;
  });
};
