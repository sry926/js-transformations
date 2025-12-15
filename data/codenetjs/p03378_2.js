function Main(input) {
    input = input.split("\n");
    params = input[0].split(" ");
    n = parseInt(params[0]);
    m = parseInt(params[1]);
    x = parseInt(params[2]);
    fee_stations = input[1].split(" ");

    sum = 0;
    for(var i=0; i < m; i++){
        pos = parseInt(fee_stations[i]);
        if( pos > x){
            break;
        }
        else{
            sum += 1;
        }
    }
    if( sum < m/2 ){
        console.log(sum);
    }
    else{
        console.log(m - sum);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));