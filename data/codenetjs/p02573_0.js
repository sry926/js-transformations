let inputString = "";
let currentLine = 0;
process.stdin.on("data", (data) => {
  inputString += data;
});
process.stdin.on("end", function () {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());
  main();
});
function readLine() {
  return inputString[currentLine++];
}
function main() {
  let [totalPeople, t] = readLine()
    .split(" ")
    .map((n) => parseInt(n));
  const graph = {};
  const seendCouple = {};
  while (t--) {
    let [p1, p2] = readLine()
      .split(" ")
      .map((n) => parseInt(n));

    if (!seendCouple[`${p1}-${p2}`]) {
      seendCouple[`${p1}-${p2}`] = true;

      if (!graph[p1]) graph[p1] = { [p2]: p2 };
      else graph[p1] = { ...graph[p1], ...{ [p2]: p2 } };
      if (!graph[p2]) graph[p2] = { [p1]: p1 };
      else graph[p2] = { ...graph[p2], ...{ [p1]: p1 } };
    }
  }

  let max = 0;
  for (let key in graph) {
    dfs(key, {}, 1);
  }
  console.log(max);

  function dfs(node, visited, count) {
    if (!visited[node]) {
      max = Math.max(max, count);
      visited[node] = true;
      if (graph[node]) {
        for (key in graph[node]) {
          dfs(key, visited, count + 1);
        }
      }
    }
  }
}
