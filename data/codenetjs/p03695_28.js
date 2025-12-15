'use strict'
function main(input) {
    const tmp = input.split('\n');
    const N = parseInt(tmp[0], 10);
    const a = tmp[1].split(' ').map((elem) => parseInt(elem, 10));

    const border = [1, 2, 3, 4, 5, 6, 7, 8].map((elem) => elem * 400);
    let population = Array(8).fill(0);
    let rainbowCount = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < 8; j++) {
            if (border[j] <= a[i] && a[i] < border[j + 1]) {
                population[j]++;
            }
        }
        if (border[border.length - 1] <= a[i]) {
            rainbowCount++;
        }
    }

    let minKind = 0;
    let maxKind = 0;
    const c = population.length - howManyZero(population);
    if (c === 0) {
        minKind = 1;
    } else {
        minKind = c;
    }

    maxKind = rainbowCount + c;

    console.log(minKind + " " + maxKind);
}

function howManyZero(arr) {
    let count = 0;
    for (let elem of arr) {
        if (elem === 0) {
            count++;
        }
    }

    return count;
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));