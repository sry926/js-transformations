"use strict"
const create = () => {
    const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
    const res = {
        "list": input, "index": 0, "max": input.length,
        "hasNext": function () { return this.index < this.max },
        "next": function () { if (!this.hasNext()) { throw "ArrayIndexOutOfBoundsException"; } else { return this.list[this.index++]; } }
    };
    return res;
}
const o = create();
const next = () => o.next()
const nextInt = () => parseInt(o.next())
const nextStrArray = () => o.next().split(" ")
const nextIntArray = () => o.next().split(" ").map(el => parseInt(el))
const nextCharArray = () => o.next().split("")
const hasNext = () => o.hasNext()
const myout = (...x) => console.log(...x)

const isValid = (pat, n) => {
    let x = pat[0]
    let y = pat[1]
    let z = pat[2]
    return n == x * x + y * y + z * z + x * y + y * z + z * x
}

const Main = () => {
    let n = nextInt()
    let max = Math.ceil(Math.sqrt(n))
    let pat = []
    const gen = (sub, tMax) => {
        if (sub.length == 3) {
            let sum = sub[0] * sub[0] + sub[1] * sub[1] + sub[2] * sub[2] + sub[0] * sub[1] + sub[1] * sub[2] + sub[2] * sub[0]
            pat.push([...sub, sum])
            return
        }
        for (let i = 1; i <= tMax; i++) {
            gen([...sub, i], tMax)
        }
    }
    gen([], max)
    for (let i = 1; i <= n; i++) {
        let tmp = 0
        for (let el of pat) {
            if (el[3] == i) tmp++
        }
        console.log(tmp)
    }
}
Main()

