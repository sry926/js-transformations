function Main(input) {
    input = input.split("\n");
    var n = parseInt(input[0], 10);
    var num = input[1].split(' ');
    var numA = new Array(n);
    var numB = new Array(n);
    var ansA = new Array(n);
    var anser = new Array(n);
    for(var i=0; i<n; i++){
      num[i] = parseInt(num[i], 10);
      numA[i] = new Array(1000001);
      ansA[i] = new Array(1000001);
      for(var j=2; j<1000001; j++){
        ansA[i][j] = 0;
        numA[i][j] = 0;
      }
      for(var j=2; j<1000001; j++){
        numA[i][j] = 0;
        ansA[i][j] = 0;
        for(var k=0; k>=0; k){
          if(num[i]%j == 0){
            numA[i][j]++;
            num[i]/=j;
          }else{
            break;
          }
        }
        if(num[i] == 1){
          numB[i] = j;
          break;
        }
      }
    }
    for(var i=0; i<n; i++){
      for(var j=2; j<1000001; j++){
        for(var k=0; k<n; k++){
          if(i != k){
            if(j==3 && k==1 && i==0){
            }
            if(numA[k][j]-numA[i][j]-ansA[i][j] > 0){
              ansA[i][j] += numA[k][j]-numA[i][j]-ansA[i][j];
            }
          }
        }
      }
    }
    var anserN = 0;
    for(var i=0; i<n; i++){
      anser[i] = 1;
      for(var j=2; j<1000001; j++){
        if(ansA[i][j] > 0){
          anser[i] *= Math.pow(j,ansA[i][j]);
        }
      }
      anserN += anser[i];
    }
    console.log(anserN%(Math.pow(10, 9)+7));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));