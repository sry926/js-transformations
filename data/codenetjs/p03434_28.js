Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function Main(args){
    var input = args.split('\n');
    var N = parseInt(input[0], 10);
    var a = input[1].split(' ').map(a => parseInt(a, 10)).sort();
    var Alice = 0;
    var Bob = 0;
    var diff = 0;

    for(var i=0; i<N; i++){
        (i%2===0)?(Alice+=a.pop()):(Bob+=a.pop());
    }

    console.log(Alice-Bob);
}