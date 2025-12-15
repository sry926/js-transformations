// inputに入力データ全体が入る
function Main(input) {
	var array = input.split("\n");
  	var count = Number(array[0]) - 1;
	var forcount = count - 1;
  		array = array[1].split(" ");

  	var front_sum = Number(array[0]);
    var back_sum = Number(array[count]);

  	var front_count = 0;
	var back_count = count;
  	
	for(var i = 0; i < forcount; i++){
		if(front_sum < back_sum) {
          front_count = front_count + 1;
          front_sum = front_sum + Number(array[front_count]);
        }
        else{
          back_count = back_count - 1;
          back_sum = back_sum + Number(array[back_count]);
        }
    }
 	console.log(Math.abs(front_sum - back_sum));
 }
 //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
 Main(require("fs").readFileSync("/dev/stdin", "utf8"));
