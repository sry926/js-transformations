'use strict';

const main = (input) => {
    const lines = input.split('\n');
    const header = lines[0].split(' ');
    const height = parseInt(header[0], 10);
    const width = parseInt(header[1], 10);
    const map = [];
    const empty_col = new Array(width);
    for (let j = 0; j < height; j++) {
        let map_line = [];
        const l = lines[j + 1];
        if (l.indexOf('#') == -1) {
            continue; // skip empty_line
        }
        for (let i = 0; i < width; i++) {
            map_line[i] = l[i];
            if (l[i] == '#') {
                empty_col[i] = 1;
            }
        }
        map.push(map_line);
    }
    map.forEach((v) => {
        let line = '';
        for (let i = 0; i < width; i++) {
            if (empty_col[i] == 1) {
                line += v[i];
            }
        }
        console.log(line);
    });
};

const isTest = false;

if (isTest) {
    main('4 4\n##.#\n....\n##.#\n.#.#\n');
    main('3 3\n#..\n.#.\n..#\n');
    main('4 5\n.....\n.....\n..#..\n.....\n');
    main('7 6\n......\n....#.\n.#....\n..#...\n..#...\n......\n.#..#.');
} else {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}