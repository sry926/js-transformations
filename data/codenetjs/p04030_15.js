function main(input) {
    const keys = input.split("");

    let buffer = [];
    const atoms = new Map();
    
    const addBuffer = atom => buffer.push(atom);
    const popBuffer = atom => buffer.pop();
    
    atoms.set("0", addBuffer);
    atoms.set("1", addBuffer);
    atoms.set("B", popBuffer);
    
    for (const atom of keys) {
        const fn = atoms.get(atom);
        fn(atom);
    }
    console.log(buffer.join(''));
}

// let input = "01B0";
// let input = "0BB1";
// main(input);
main(require("fs").readFileSync("/dev/stdin","utf8"));
  