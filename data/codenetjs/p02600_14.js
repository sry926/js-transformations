function main(arg) {
    let p = Number(arg)
    let ans = 0
    if(p < 600)ans = 8
    else if(p < 800)ans = 7
    else if(p < 1000)ans = 6
    else if(p < 1200)ans = 5
    else if(p < 1400)ans = 4
    else if(p < 1600)ans = 3
    else if(p < 1800)ans = 2
    else if(p < 2000)ans = 1
    console.log(ans)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));