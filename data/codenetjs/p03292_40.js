const main =  i => console.log(
i.split(' ').map(n => parseInt(n)).map((c, i, arr) => Math.abs(arr[(i+1)%arr.length] - c)).sort().slice(0, 2).reduce((prev, curr) => prev + curr,0))

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))