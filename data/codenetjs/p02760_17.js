'use strict'
const Main=input=>{
    input=input.split("\n");
    
    let hole=[[false,false,false],[false,false,false],[false,false,false]];
    const sheet=[];
    sheet.push(input[0].split(" "));
    sheet.push(input[1].split(" "));
    sheet.push(input[2].split(" "));
    
    for(let i=0;i<input[3];i++){
        const num=input[4+i];
        for(let y=0;y<3;y++){
            for(let x=0;x<3;x++){
                if(sheet[y][x]==num)hole[y][x]=true;
            }
        }
    }
    
    let check=false;
    for(let i=0;i<3;i++){
        if(hole[i][0]&&hole[i][1]&&hole[i][2])check=true;
        if(hole[0][i]&&hole[1][i]&&hole[2][i])check=true;
    }
    if(hole[0][0]&&hole[1][1]&&hole[2][2])check=true;
    if(hole[2][0]&&hole[1][1]&&hole[0][2])check=true;
    
    if(check){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));