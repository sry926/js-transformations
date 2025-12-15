const chunks = [];
process.stdin.on("data", (chunk) => {
  chunks.push(chunk);
});
process.stdin.on("end", () => {
  const data = Buffer.concat(chunks).toString("utf8").trim();
  const lines = data.split("\n");
  const [N, K] = parseLine(lines[0]);
  const A = parseLine(lines[1]);
  console.log(solve(N, K, A));
});

function parseLine(line) {
  return line.split(" ").map((item) => parseInt(item, 10));
}

const MOD = 1000000007;
function solve(N, K, A) {
  if (A.every((a) => a < 0) && K % 2 === 1) {
    A.sort((a, b) => b - a);
    let mult = 1;
    for (let i = 0; i < K; i++) {
      mult = (mult * Math.abs(A[i])) % MOD;
    }
    return (-mult + MOD) % MOD;
  }

  // Sort by abs desc
  const nonNegatives = A.filter((a) => a >= 0).sort((a, b) => a - b);
  const negatives = A.filter((a) => a < 0).sort((a, b) => b - a);

  let mult = 1;
  for (let i = 0; i < K; i++) {
    const nonNega =
      nonNegatives.length > 0 ? nonNegatives[nonNegatives.length - 1] : null;
    const nega =
      negatives.length > 1 && i < K - 1
        ? negatives[negatives.length - 1] * negatives[negatives.length - 2]
        : null;
    if (nonNega !== null && (nega === null || nonNega > nega)) {
      mult = (mult * nonNega) % MOD;
      nonNegatives.pop();
    } else if (nega !== null) {
      mult = (mult * nega) % MOD;
      negatives.pop();
      negatives.pop();
      i++;
    } else {
      throw new Error("should not happen");
    }
  }

  return mult;
}
