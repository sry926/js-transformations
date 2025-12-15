const input = require("fs").readFileSync("/dev/stdin", "utf8");
const ret = 24 + 24 - (input - 0);

console.log(ret);
