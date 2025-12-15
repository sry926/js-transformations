function main(input) {
  const args = input.split('\n');
  const N = args[0];
  let items = [];
  for (let i = 1; i < args.length; i++) {
    const pair = args[i].split(' ');
    if (pair.length >= 2) {
      items.push({ number: i, name: pair[0], point: parseInt(pair[1], 10) });
    }
  }
  items.sort(function(item1, item2) {
    if (item1.name !== item2.name) {
      if (item1.name < item2.name) {
        return -1;
      }
      if (item2.name < item1.name) {
        return 1;
      }
      return 0;
    }
    return item2.point - item1.point;
  });
  for (let i = 0; i < items.length; i++) {
    console.log(items[i].number);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
