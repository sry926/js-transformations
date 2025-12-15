'use strict'

const INF = 900719925474099;

function numofbits5(bits)
{
    bits = bits & 0xffffffff
    bits = (bits & 0x55555555) + (bits >> 1 & 0x55555555);
    bits = (bits & 0x33333333) + (bits >> 2 & 0x33333333);
    bits = (bits & 0x0f0f0f0f) + (bits >> 4 & 0x0f0f0f0f);
    bits = (bits & 0x00ff00ff) + (bits >> 8 & 0x00ff00ff);
    bits = (bits & 0x0000ffff) + (bits >>16 & 0x0000ffff);

    //console.log('bits:',bits);
    return bits;
}

function Main(input){
    let temp = input.trim().split('\n');
    let temp2 = temp[0].split(' ').map((v)=>parseInt(v));
    let n = temp2.shift();
    let m = temp2.shift();
    
    let k;
    let sum;
    let ksw = [];
    for(let i=1;i<=m;i++){
        temp2 = temp[i].split(' ').map((v)=>parseInt(v));
        k = temp2[0];
        sum = 0;
        for(let j=1;j<=k;j++){
            sum += 1 << (temp2[j]-1);
        }
        ksw.push(sum);
    }
    let p = temp[m+1].split(' ').map((v)=>parseInt(v));

    //console.log('-------------------------');
    //console.log(ksw,p);
    let ans = 0;
    let f;
    let maxi = Math.pow(2,n)
    for(let i=0;i<maxi;i++){
        f = true;
        for(let j=0;j<m;j++){
            //console.log('ksw:',ksw[j],'i:',i,'ksw&i:',ksw[j]&i,'bits:',numofbits5(ksw[j]&i),'p:',p[j],'if:',numofbits5(ksw[j]&i)%2 != p[j]);
            if(numofbits5(ksw[j]&i)%2 != p[j]){
                f = false;
                //console.log('break;');
                break;
            }
        }
        if(f == true) ans++;
        //console.log('cnt:',ans);
    }
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
