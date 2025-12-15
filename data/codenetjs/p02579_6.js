function main(lines) {
  const [H, W] = na();
  const [Ch, Cw] = na();
  const [Dh, Dw] = na();
  const maze = lines.slice(3).map(l => l.split(''));
  
  const ans = search(maze, Ch-1, Cw-1, Dh-1, Dw-1);
  
  return ans;
}

function search(graph, ch, cw, dh, dw) {
  const dequeue = [[ch, cw, 0]];
  while (dequeue.length) {
    let [h, w, cost] = dequeue.shift();
    if (h == dh && w == dw) return cost;
    graph[h][w] = '/';
    [[h-1, w], [h+1, w], [h, w-1], [h, w+1]].forEach(([h, w]) => {
      if (!graph[h] || graph[h][w] != '.') return;
      dequeue.unshift([h, w, cost]);
      graph[h][w] = '/';
    });
    for (let _h = h-2; _h <= h+2; _h++) {
      for (let _w = w-2; _w <= w+2; _w++) {
        if (graph[_h] && graph[_h][_w] == '.') dequeue.push([_h, _w, cost+1]);
      }
    }
  }
  return -1;
}



const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

let lineCount = 0;
const s = () => lines[lineCount++];
const n = () => Number(s());
const b = () => BigInt(s());
const sa = () => s().split(' ');
const na = () => sa().map(Number);
const ba = () => sa().map(BigInt);

const ans = main(lines);
console.log( ans );