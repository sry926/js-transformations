'use strict'

function main(input) {

        input = input.split(/\n|\s/).map(v => ~~v)
        let q = input[1]
        let tmp = input.slice(2)
        let recipe = tmp.sort((a, b) => a - b)

        let sum = recipe.reduce((v, x) => v + x) //recipe.length個

        console.log(Math.floor((q - sum) / recipe[0]) + recipe.length)


}
main(require("fs").readFileSync("/dev/stdin", "utf8"));



