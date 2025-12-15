'use strict'
function _(s){let l=s.split('\n');if(l[l.length-1]=='')l.pop();this.l=l;this.y=0}
_.prototype.ints = function(){return this.l[this.y++].split(' ').map(v=>+v)}
_.prototype.intv = function(){const y=this.y;this.y=this.l.length;return this.l.slice(y).map(v=>+v)}
_.prototype.strv = function(){const y=this.y;this.y=this.l.length;return this.l.slice(y)}
_.prototype.strn = function(n){const y=this.y;this.y+=n;return this.l.slice(y,y+n)}
const $ = new _(require("fs").readFileSync("/dev/stdin", "utf8"))
let n,m
[n,m] = $.ints()
const a = $.strn(n)
const b = $.strn(m)
for(let i=0;i<n-m;++i){
    for(let j=0;j<n-m;++j){
        let flag = true;
        for(let k=0; k<m && flag;k++){
            for(let l=0;l<m && flag;l++){
                flag = a[i+k][j+l] == b[k][l]
            }
        }
        if(flag){
            console.log('Yes')
            return 0
        }
    }
}
console.log('No')