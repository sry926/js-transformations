function Main(input) {
    var input = input.split(' ').map(n => parseInt(n, 10));
    A = input[0];
    B = input[1];
    console.log((A + B) % 24);
    

    }
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));