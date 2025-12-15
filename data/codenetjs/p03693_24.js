function Main(input) {
    input = input.split("\n");
    var line = input[0].split(" ");
    var num = 100*parseInt(line[0])+10*parseInt(line[1])+parseInt(line[2]);
    

    if(num%4===0){
        console.log("YES");
    } else {
        console.log("NO");
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));