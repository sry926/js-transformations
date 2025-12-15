
let input = require("fs").readFileSync("/dev/stdin", "utf8")

function main({ input, load, yesno, math_sum, math_max, math_min, log_json }) {
    let [N] = load()
    
    let count = 0
    for(let i = 2; i <= N; i++) {
        if(N % i === 0) {
            N /= i
            count++
        }
    }

    return count
}



// console.time()
let inputs = input.split(/[\s\n]/)
let result = main({
    input,
    yesno: value => value ? 'Yes' : 'No',
    math_sum: numbers => numbers.reduce((acc, cur) => acc + cur, 0),
    load(rows = 1, cols = 1, type = Number) {
        const length = rows * cols
        let result = inputs.splice(0, length)
        if(type !== String) result = result.map(type)
        if(cols > 1) {
            const arrays = new Array(cols)
            for(let col = 0; col < cols; col++) {
                arrays[col] = new Array()
                for(let row = 0; row < rows; row++) {
                    arrays[col].push(result[row * cols + col])
                }
            }
            result = arrays
        }
        return result
    },
    inifinite_loop_preventer() {
        throw new Error("Infinite loop")
    },
    math_max,
    math_min,
    log_json(value) {
        console.log(JSON.stringify(value))
    },
})

if(result === undefined) {
    console.warn("result is undefined")
} else {
    console.log(result)
}
// console.timeEnd()

function math_max(numbers, initial_value = null) {
    let result = (initial_value === null) ? numbers[0] : initial_value
    for(const n of numbers) if(n > result) result = n
    return result
}

function math_min(numbers, initial_value = null) {
    let result = (initial_value === null) ? numbers[0] : initial_value
    for(const n of numbers) if(n < result) result = n
    return result
}
