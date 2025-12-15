const main = input =>{
    const IN = input.split("\n");
    const N = parseInt(IN[0]);
    const A = IN[1].split(" ");


    var array1 = new Array(N);

    for(var i=0; i<N; i++){

        array1[A[i]- 1] = i + 1;
    }
   // console.log(array1);
  console.log(array1.join(' '));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
