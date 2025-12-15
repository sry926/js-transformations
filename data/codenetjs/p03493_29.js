function main(input) {
    const splitInput = input.replace(/0/g,'');
    console.log(splitInput.length);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));