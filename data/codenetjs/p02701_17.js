"use strict";

const main = (input) => {
    const spi = input.split('\n');
    const n = Number(spi[0]);

    const map = new Map();
    for (let i = 1; i < n + 1; i++) {
        if (map.has(spi[i]))
            map.set(spi[i], map.get(spi[i]) + 1);
        else 
            map.set(spi[i], 0);
    }
    console.log(map.size);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
