function main(input) {
    var list = input[1].split("");
    var ans = 0;
    for(var i=0;i<list.length;i++){
        ans = Math.max(ans,check(list, i));
    }
    console.log(ans);
    
}
function check(list, idx){
    var a = {};
    var b = {};
    list.forEach((v,i)=>{
        if(i<=idx) a[v] = true;
        else b[v] = true;
    });
    var ans = 0;
    Object.keys(a).forEach(v=>{
        if(b[v]) ans++;
    });
    return ans;
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
