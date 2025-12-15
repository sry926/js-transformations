function main(input) {
    var s = input.split('\n')[1];
    var r = 1;
    for (var i = 1; i < s.length; i++)
        if (s[i - 1] !== s[i]) r++;
    console.log(r);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));