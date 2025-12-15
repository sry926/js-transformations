const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(/\n/);
let dice= input[0].split(' ').map(Number);
let direction = input[1].split('');
roll(direction[1], dice);
function roll(direc, arr) {
    let d1 = arr[0];
    let d2 = arr[1];
    let d3 = arr[2];
    let d4 = arr[3];
    let d5 = arr[4];
    let d6 = arr[5];
    let result = [];
     if (direc === 'N') {
       result = [d2, d6, d3, d4, d1, d5];
      }
    if (direc === 'S') {
       result = [d5, d1, d3, d4, d6, d2];
    }
    if (direc === 'W') {
       result = [d3, d2, d6, d1, d5, d4];
    }
    if (direc === 'E') {
       result = [d4, d2, d1, d6, d5, d3];
    }
    return result;
}
for (let i=0; i<direction.length; i++) {
    dice = roll(direction[i], dice);
}

console.log(dice[0]);
