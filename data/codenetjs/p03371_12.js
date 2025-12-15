function main(lines) {
    const input = lines.split(' ').map(Number)
    const A = input[0]
    const B = input[1]
    const C = input[2]
    const X = input[3]
    const Y = input[4]
    
    let output = []
    for(let i=0; i<=Math.pow(10,5);i++){
        let cost = 2*C*i + A*Math.max(X-i,0) + B*Math.max(Y-i,0)
        output.push(cost)
    }
    console.log(output.sort(function(a,b){return a-b;})[0])
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

