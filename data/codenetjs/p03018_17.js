function main(input) {
    var value = input.trim();
    var index;
    var count = 0;
    while((index = value.indexOf("ABC")) !== -1) {
        value = value.replace("ABC", "BCA")
        count++;
    }

    console.log(count)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));