function Main(input) {
  const BLACK = '0';
  const WHITE = '1';
  const tileColors = input.split('');
  var firstBlackCount = 0;
  var firstWhiteCount = 0;
  tileColors.forEach((color, index) => {
    const firstBlackColor = index % 2 === 0 ? BLACK : WHITE;
    const firstWhiteColor = index % 2 === 0 ? WHITE : BLACK;
    if (color !== firstBlackColor) {
      firstBlackCount++;
    }
    if (color !== firstWhiteColor) {
      firstWhiteCount++;
    }
  });
  console.log(
    firstBlackCount > firstWhiteCount ? firstWhiteCount : firstBlackCount
  );
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));