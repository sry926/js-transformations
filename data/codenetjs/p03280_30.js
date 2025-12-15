
const Main = (input) => {
    const A = input.split(' ')[0];
    const B = input.split(' ')[1];
    console.log(A * B - A - B + 1)
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));