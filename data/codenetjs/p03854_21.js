function main(input) {
    const reverseString = (s) => {
        return s.split('').reverse().join('');
    };

    // 文字列を反転
    const WORDS = ['dream', 'dreamer', 'erase', 'eraser'].map(reverseString);

    var S = reverseString(input.split('\n')[0]);

    var index = 0;
    
    while(true) {
        var w = WORDS.find((w) => S.startsWith(w, index));
        if (!w) break;
        index += w.length;
    }

    if (S.length === index) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
