function diff(arr) {
    var sum = 0
    for (var i = 1; i < arr.length; i++) {
        sum += Math.abs(Number(arr[i]) - Number(arr[i-1]))
    }
    return sum
}

function main(arg) {
    arg = arg.split("\n")
    var N = Number(arg.shift())
    var result = []
    arg = arg.sort()
    //console.log(arg)
    result.push(arg.shift())
    
    while(1) {
        if (arg.length === 0) {
            break;
        }
        result.push(arg.pop())
        
        
        if (arg.length === 0) {
            break;
        }
        result.unshift(arg.pop())
        
        
        if (arg.length === 0) {
            break;
        }
        result.push(arg.shift())
        
        if (arg.length === 0) {
            break;
        }
        result.unshift(arg.shift())
    }
    //console.log(result)
    console.log(diff(result))
    
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));