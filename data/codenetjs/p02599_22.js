const main = (stdin) => {
    const input = stdin.split("\n");
    const [ n, q ] = input[0].split(' ');
    const balls = input[1].split(' ');
      
 
    for(let i=2;i<Number(q)+2;i++) {
      const [ s, e ] = input[i].split(' ');
      console.log(Array.from(new Set(balls.slice(Number(s)-1, Number(e)))).length)
    }
 
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));