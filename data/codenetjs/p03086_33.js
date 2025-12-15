function Main(S) {
    max = 0;
    ACGT = S.trim().match(/(A|C|G|T)+/);
    if (!ACGT) ACGT = [];
    for (i = 0; i < ACGT.length; i++)
        if (ACGT[i].length > max)
            max = ACGT[i].length;
    console.log(max);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));