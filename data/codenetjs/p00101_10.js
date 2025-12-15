var d = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
d.shift();
d.forEach(function(p) {
  console.log(p.replace(/Hoshino/g, 'Hoshina'));
});