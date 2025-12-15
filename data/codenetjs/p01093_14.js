const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

while (line = lines.shift()) {
    const numbers = line.split(' ').map(Number);
    const n = numbers[0];

    if (n === 0) break;
    const line2 = lines.shift()
    const array = line2.split(' ').map(Number);

    let distance = 1000000;

    for (let i=0 ; i < n; i++) {
        for (let j=0 ; j < n; j++) {
            if (i === j) continue;
            const tempDistance = Math.abs(array[i] - array[j]);
            if (distance > tempDistance) {
                distance = tempDistance;
            }
        }
    }


    // Edit from here
    const output = distance;
    // to here
    
    console.log(output);
    
}

