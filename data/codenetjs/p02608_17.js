function Main(input){
    const N = Number(input);

    for(let i=1; i<=N; i++){
        let count = 0;
        for(let x=1; x<=N; x++){
            for(let y=1; y<=N; y++){
                if(x+y > N) break;
                for(let z=1; z<=N; z++){
                    if(x+y+z > N) break;
                    if(x**2 + y**2 + z**2 + x*y + y*z + z*x === i) {
                        // console.log(x,y,z)
                        count++
                    }; 
                }
            }
        }
        console.log(count);
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));