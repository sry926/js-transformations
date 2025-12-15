require('fs').readFileSync('/dev/stdin','utf8').trim().split("\n").map(l=>{[m,f,r]=l.split(" ").map(Number)
if(m<0&&f<0&&r<0)return
a=m+f
console.log(m<0||f<0||a<30?"F":a>=80?"A":a>=65?"B":a>=50||r>=50?"C":"D")})

