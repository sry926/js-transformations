function Main(input) {
    var input_arr = input.split("\n");
    // var input_arr_line0 = input_arr[0].split(" ");
    var s = input_arr[0];
    if (s <= "2019/04/30") {
        console.log("Heisei")
    } else {
        console.log("TBD")
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));