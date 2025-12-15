function Main(input) {
    input = input.split(" ").map(x => parseInt(x));
    var ans = 0;
    var str = "";
    var time = 0;
    if( Math.abs(input[1]-input[2])==1){
        str = "win both or lose both";
    }
    else if( input[1] < input[2]){
        str = "second win";
    }
    else{
        str = "first win";
    }
    switch(str){
        case "win both or lose both" :
            {   
                if(input[2]-input[1]>0){
                    while(time<input[0]){
                        if(input[1]==input[2]){
                            break;
                        }
                        if(input[1]!=1){
                            input[1]--;
                        }
                        input[2]--;
                        ++ans;
                        time++;
                    }
                }
                else{
                    while(time<input[0]){
                        if(input[1]==input[2]){
                            break;
                        }
                        if(input[2]!=input[0]){
                            input[2]++;
                        }
                        input[1]++;
                        ++ans;
                        time++;
                    }
                }
                
            }
            break;
        case "first win":
            {
                while(input[1]!=input[2]){
                    input[1]--;
                    input[2]++;
                    ans++;
                }
            }
            break;
        case "second win":
            {
                while(input[1]!=input[2]){
                    input[1]++;
                    input[2]--;
                    ans++;
                }
            }
            break;
        default:
            console.log("default");
    }
    console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));