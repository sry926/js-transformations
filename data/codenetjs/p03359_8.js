'use strict'

function main(input) {
    input = input.split(' ').map(v => ~~v)
    let year = 2018
    let cnt = 0

    let monthlast;

    for (let i = 1; i <= input[0]; i++) {

        monthlast = new Date(year, i, 0)

        for (let d = 1; d <= monthlast.getDate(); d++) {

            if (i != input[0]) {
                if (i == d) cnt++
            } else {

                if (d <= input[1] && i == d) cnt++
            }

        }




    }
    console.log(cnt)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));