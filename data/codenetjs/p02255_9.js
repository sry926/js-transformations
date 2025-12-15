const insertionSort = input => {
  let list = input
    .split("\n")[1]
    .split(" ")
    .map(x => parseInt(x));
  console.log(list.join(" "));

  for (let i = 1; i < list.length; i++) {
    let el = list[i];
    let j;

    for (j = i - 1; j >= 0 && list[j] > el; j--) {
      list[j + 1] = list[j];
    }
    list[j + 1] = el;
    console.log(list.join(" "));
  }
};

insertionSort(require("fs").readFileSync("/dev/stdin", "UTF-8"));

