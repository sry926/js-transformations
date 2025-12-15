function Main(inp) {
    var input = inp.split('\n')[0].split(' ').map(function(n) {
        return Number(n);
    });
    var numbers = input[0];
    var colors = input[1];
    // 1個目 colors 通り
    // 2個目 colors - 1 通り, 3個目 colors - 1 通り, ...
    // colors * (colors - 1) ^ (numbers - 1)
    var patterns = colors * Math.pow(colors - 1, numbers - 1); 
    console.log(patterns);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));