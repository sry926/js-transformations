const config = {
    input: '/dev/stdin',
    newline: '\n'
};

const line = require('fs').readFileSync(config.input, 'utf-8').split(config.newline);

const data = {
    pond : [],
    stack : []
};

const results = line[0].split('').reduce((acc, x, i) => {
    if (x === '\\') {
        acc.stack.push(i);
    } else if (x === '/' && acc.stack.length > 0) {
        const k = acc.stack.pop();
        const hd = acc.pond.filter(xs => xs[0] >= k);
        const tl = acc.pond.filter(xs => xs[0] < k);

        const sum = [k, hd.map(xs => xs[1]).reduce((acc, x) => acc + x, 0) + (i - k)]
        tl.push(sum);
        acc.pond = tl;
    }

    return acc;
}, data);

console.log(results.pond.reduce((acc, x) => acc + x[1], 0));
console.log(`${results.pond.length} ${results.pond.map(x => x[1].toString()).join(' ')}`);
