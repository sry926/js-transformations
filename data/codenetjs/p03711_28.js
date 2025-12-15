function Main(input) {
  const arr = input.split(' ');
  const x = parseInt(arr[0], 10);
  const y = parseInt(arr[1], 10);
  let g = [];
  const a = [1, 3, 5, 7, 8, 10, 12];
  const b = [4, 6, 9, 11];
  const c = [2];

  if (a.indexOf(x) >= 0) {
    g = a;
  } else if (b.indexOf(x) >= 0) {
    g = b;
  } else if (c.indexOf(x) >= 0) {
    g = c;
  }


  if (g.indexOf(y) >= 0) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
