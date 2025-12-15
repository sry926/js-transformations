function Main(i) {
    var n = 0;
    i[0] == 1 ? n++ : null;
    i[1] == 1 ? n++ : null;
    i[2] == 1 ? n++ : null;
    console.log(n);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));