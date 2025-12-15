// clear time: 24:00
(function (input) {
    /*
    利子：運用資金残高に年利率をかけ、1円未満は切り捨て

    複利：利子は翌年以降の運用資金の残高に加算
    単利：利子は別の場所へ蓄積

    手数料：上記の処理を行ったあとに、運用資金の残高から手数料が引かれる
    */
    var inputs = input.replace(/\r/g, '').split("\n"),
        n;

    n = parseInt(inputs.shift());

    while ( n-- ) {
        var funds = parseInt(inputs.shift()),   // 初期運用資金
            years = parseInt(inputs.shift()),   // 運用年数
            m = parseInt(inputs.shift()),       // データセット数
            max = 0;

        // 最高最終資金を求める
        while ( m-- ) {
            var line = inputs.shift().split(' '),
                funds_tmp = funds,
                box = 0;
            method = {
                kind: line[0] === '0' ? true : false,                // 単利=true
                annualInterestRate: parseFloat(line[1]),             // 年利率
                charge: parseInt(line[2])                            // 手数料
            };
            for ( var i = 0; i < years; i++ ) {
                if ( method.kind ) {
                    box += ~~(funds_tmp * method.annualInterestRate);
                } else {
                    funds_tmp += ~~(funds_tmp * method.annualInterestRate);
                }
                funds_tmp -= method.charge;
            }
            funds_tmp += box;
            if ( funds_tmp > max ) {
                max = funds_tmp;
            }
        }

        console.log(max);
    }

})(require("fs").readFileSync("/dev/stdin", "utf8"));