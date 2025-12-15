process.stdin.resume();
process.stdin.setEncoding("utf8");

const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const w = lines[0];
  let count = 0;
  for (let i = 1; i <= lines.length; i++) {
    const s = lines[i];
    if (s === "END_OF_TEXT") break;
    const ss = s.split(" ");
    for (let j = 0; j < ss.length; j++) {
      if (ss[j].toLowerCase() === w) count++;
    }
  }
  console.log(count);
});

