function main(input) {
    var a = input[0].split(" ")[0]-0;
    var b = input[0].split(" ")[1]-0;
    var c = input[0].split(" ")[2]-0;
    
    console.log(a+b>=c?"Yes":"No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
