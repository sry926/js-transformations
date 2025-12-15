function Main(input) {
  if (input == 'Sunny') console.log('Cloudy');
  if (input == 'Cloudy') console.log('Rainy');
  if (input == 'Rainy') console.log('Sunny');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
