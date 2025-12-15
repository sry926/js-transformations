function Main(input) {
    input = input.split("\n");
    //文字列から10進数に変換するときはparseIntを使います
    let a = input[0].split(" ",10)[0];
    let b = input[0].split(" ",10)[1];//分割代入
    let c = input[0].split(" ",10)[2];
    let d = input[0].split(" ",10)[3];//分割代入
     a = parseInt(a,10);
     b = parseInt(b,10);
     c = parseInt(c,10);
     d = parseInt(d,10);
 
    let ary = [];
    ary.push(a*c);
    ary.push(a*d);
    ary.push(b*c);
    ary.push(b*d);
    let res = Math.max.apply(null, ary);
    //出力
    console.log(res);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));