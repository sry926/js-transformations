function main(arg) {
    let N = arg.split("\n")[0]
    let a = arg.split("\n")[1].split(" ").map(Number)
    
    let count=0
    for(let i=0; i<N; i++) {
        if(i%2 && a[i]%2) {
            count++
        }
    }
    console.log(count)
    
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));