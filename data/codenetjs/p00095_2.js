(function (input) {
    var inputs = input.replace(/\r/g, '').split("\n"),
        data = new Array(20),
        n, line, max_index;

    n = parseInt(inputs.shift());
    // console.log (n);

    while ( n-- ) {
        line = inputs.shift().split(' ');
        data[line[0]] = parseInt(line[1]);
    }

    max_index = 0;
    data.forEach(function(result, i) {
        if ( !data[max_index] || result > data[max_index] ) {
            max_index = i;
        }
    });
    console.log(max_index, data[max_index]);

})(require("fs").readFileSync("/dev/stdin", "utf8"));