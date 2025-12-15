function main(input) {
    var n = input[0]-0;
    var list = input[1].split(" ").map(v=>v-0);
    var tlist = input[1].split(" ").map(v=>v-0);
    list.sort((a,b)=>a-b);
    var a = list[n/2-1];
    var b = list[n/2];
    for(var i=0;i<n;i++){
        if(tlist[i] <= a) console.log(b);
        else console.log(a);
    }
    
}

main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"));

