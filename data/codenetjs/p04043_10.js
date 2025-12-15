function main(input) {
    const nums = input.split(" ");
    var count5 = 0, count7 = 0;
    
    nums.forEach( num => {
        if(num == 5) {
            count5 += 1;
        }
        if(num == 7) {
            count7 += 1;
        }
    })
    console.log(count5 == 2 && count7 == 1 ? "YES" : "NO");
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));