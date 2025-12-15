data = require("fs").readFileSync("/dev/stdin", "utf8").split(/\r?\n/g)[1];

data = data.split(/ /g).map(d => parseInt(d));

count = 0;
flag = false;

while ('jota') {
  data = data.map(d => {
    if (d & 1) flag = true;
    return d >> 1;
  });
  
  if (flag) break;
  count++;
}

console.log(count);