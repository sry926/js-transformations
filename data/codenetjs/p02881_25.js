/*
-------関数一覧--------
arr1dto2d(Array) 一次元配列を二次元配列にします
pf(N)素因数分解した結果をオブジェクトで返します
gcd(a,b)最大公約数を返します
lcm(a,b)最小公倍数を返します
num(a,b)a-bを返します。ソート用です
isPrime(n)素数かどうか真偽値で返します
isNumber(n)数かどうか真偽値で返します
arrsum(arr)配列の合計値を返します
nibu(arr,n)n以下で最も大きい数の添字を返します(nを含みます)
br(input)入力を改行で区切ります
*/
const debugMode = false;
const inf = Number.MAX_SAFE_INTEGER;

function Main(input){
  var n = primeFactorization(input);
  //console.log(n)
  var base = 1;
  var arr = [];
  Object.keys(n).forEach(function(val){
    base *= Math.pow(val,Math.floor(n[val]/2));
    if(n[val]%2==1) arr.push(Number(val));
  });
  arr.length = 20;
  for(var i=0;i<arr.length;i++){
      if(!arr[i]) arr[i] = 1;
  }
  var min = inf;
  var pair = new Array(20).fill(0);
  for(var p1=0;p1<2;p1++){
    for(var p2=0;p2<2;p2++){
      for(var p3=0;p3<2;p3++){
        for(var p4=0;p4<2;p4++){
          for(var p5=0;p5<2;p5++){
            for(var p6=0;p6<2;p6++){
              for(var p7=0;p7<2;p7++){
                for(var p8=0;p8<2;p8++){
                  for(var p9=0;p9<2;p9++){
                    for(var p10=0;p10<2;p10++){
                      for(var p11=0;p11<2;p11++){
                        for(var p12=0;p12<2;p12++){
                          for(var p13=0;p13<2;p13++){
                            for(var p14=0;p14<2;p14++){
                              for(var p15=0;p15<2;p15++){
                                for(var p16=0;p16<2;p16++){
                                  for(var p17=0;p17<2;p17++){
                                    for(var p18=0;p18<2;p18++){
                                      for(var p19=0;p19<2;p19++){
                                        for(var p20=0;p20<2;p20++){

    var a=1;
    var b=1;
    if(p1==0){a*=arr[0]}
    else{b*=arr[0]};
    if(p2==0){a*=arr[1]}
    else{b*=arr[1]};
    if(p3==0){a*=arr[2]}
    else{b*=arr[2]};
    if(p4==0){a*=arr[3]}
    else{b*=arr[3]};
    if(p5==0){a*=arr[4]}
    else{b*=arr[4]};
    if(p6==0){a*=arr[5]}
    else{b*=arr[5]};
    if(p7==0){a*=arr[6]}
    else{b*=arr[6]};
    if(p8==0){a*=arr[7]}
    else{b*=arr[7]};
    if(p9==0){a*=arr[8]}
    else{b*=arr[8]};
    if(p10==0){a*=arr[9]}
    else{b*=arr[9]};
    if(p11==0){a*=arr[10]}
    else{b*=arr[10]};
    if(p12==0){a*=arr[11]}
    else{b*=arr[11]};
    if(p13==0){a*=arr[12]}
    else{b*=arr[12]};
    if(p14==0){a*=arr[13]}
    else{b*=arr[13]};
    if(p15==0){a*=arr[14]}
    else{b*=arr[14]};
    if(p16==0){a*=arr[15]}
    else{b*=arr[15]};
    if(p17==0){a*=arr[16]}
    else{b*=arr[16]};
    if(p18==0){a*=arr[17]}
    else{b*=arr[17]};
    if(p19==0){a*=arr[18]}
    else{b*=arr[18]};
    if(p20==0){a*=arr[19]}
    else{b*=arr[19]};
    if(Math.abs(a-b)<min){
      min = Math.abs(a-b);
      pair = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20];
    }
  }}
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  a = base;
  b = base;
  for(var j=0;j<20;j++){
    if(pair[j]==1){
      a*=arr[j];
    }else{
      b*=arr[j];
    }
  }
  console.log(a+b-2);
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
function next(m,now){

}
function zisyozyunn(a){
  var arr = [];
  for(var i=0;i<input[0];i++){
    arr.push(i+1);
  }
  var sum = 0;
  for(var i=0;i<a.length;i++){
    var f = arr.findIndex(val => val==a[i]);
    sum += factorialize(a.length-1-i)*f;
    arr.splice(f,1);
  }
  return sum;
}
function arrsum(arr){
  var sum = 0;
  for (var i=0,len=arr.length; i<len; ++i) {
      sum += arr[i]-0;
  };
  return sum;
}
function debug(val){
  if(debugMode==true){
    console.log(val)
  }
}
function arrMaxPoint(arr){
	var max = Number.MIN_SAFE_INTEGER;
	var point = -1;
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max = arr[i];
			point = i;
		}
	}
	return point;
}
function arrMinPoint(arr){
	var min = Number.MAX_SAFE_INTEGER;
	var point = -1;
	for(var i=0;i<arr.length;i++){
		if(min>arr[i]){
			min = arr[i];
			point = i;
		}
	}
	return point;
}
function arr1dto2d (arr){
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i].split("");
		}
	return arr;
}
function isPrime(n){
    if(false===Number.isInteger(n)){
        return false;
    }
    if(n<=1){
        return false;
    }
    if(2===n){
        return true;
    }
    if(0===n%2){
        return false;
    }
    var square_root = Math.floor(Math.sqrt(n));
    for(var i=3; i<=square_root; i+=2){
        if(0===n%i){
            return false;
        }
    }
    return true;
}
function isNumber(val){
	const pat = /^([1-9]\d*|0)$/;
	return pat.test(val);
}
function arr1dto2d (arr){
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i].split("");
		}
	return arr;
}
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}
function arr1dto2d (arr){
	for(var i=0;i<arr.length;i++){
    arr[i]=arr[i].split(" ").map(Number);
    }
  return arr;
}
function rotate(array) {
  const ROW = array.length;
  const COL = array[0].length;
  const row = ROW-1;
  var a = new Array(COL);
  for (var c=0; c<COL; c++) {
    a[c] = new Array(ROW);
    for (var r=0; r<ROW; r++) {
      a[c][r] = array[row-r][c];
    }
  }
  return a;
}
function part_in(base,push,st){
	for(var i=st,p=0;p<push.length;i++,p++){
		base[i] = push[p];
	}
	return base;
}
function part_reverse(arr,s,g){
	var push = arr.slice(s-1,g);
  push.reverse();
	arr = part_in(arr,push,s-1);
	return arr;
}
function zeroPadding(num,length){
    return (num + '000000000000000000000000000000000').slice(0,length);
}
function arrsum(arr){
    var sum = 0;
    for (var i=0,len=arr.length; i<len; ++i) {
        sum += arr[i]-0;
    };
    return sum;
}
function pf(n) {
    var result = {};

    if (n === 1) {
        return {"1":1}
    }

    var init = 2;

    while (n !== 1) {
        var i = init;
        while (i < Number.MAX_SAFE_INTEGER) {
            if (n % i === 0) {
                n /= i;
                if (!(result[i] > 0)) {
                    result[i] = 0;
                }
                result[i]++;
                break;
            }
            i++;
        }
        init = i;
    }
    return result;
}
function gcd(a, b) {
    if (b === 0){
        return a
    }
    return gcd(b, a % b)
}
function lcm(a,b) {
    var g = (n, m) => m ? g(m, n % m) : n
    return a * b / g(a, b)
}
function num(a, b) {
  return a - b;
}
function nibu(a,searchValue){
	var index = -1;

//調べる左端を表す添字(index)
var left = 0;

//調べる右端を表す添字(index)
var right = a.length-1;

//左端と右端にデータがある間は処理を繰り返す
while(left <= right){

    //左右の真ん中を表す添字(index)
    middle =Math.floor((left +right)/2);

    //真ん中の値と探す値を比較する
    if(a[middle]==searchValue){
        //一致した場合、変数に入れて処理終了
        index = middle;
        break;
    }else if(a[middle]<searchValue){
        //探す値より小さい場合、左側にはもっと小さい値しかないので左端の値を真ん中の値の右に移動する
        left = middle +1;
    }else{
        //探す値より大きい場合、右側にはもっと大きい値しかないので右端の値を真ん中の値の左に移動する
        right = middle -1;
    }
}
if(index!=-1) return index;
else return left;
}
function br(input){
  return input.split("\n");
}
function is_sortred(arr){
  var flag = true;
  for(var i=1;i<arr.length;i++){
    if(arr[i-1]>arr[i]){
      flag = false;
      break;
    }
  }
  return flag;
}
function primeFactorization(n) {

	// 平方根を保存
	var s = Math.floor(Math.sqrt(n));

	var r = 0;

	var result = {};

	// 2から平方根までの素因数を求める
	for (var i = 2;i <= s;i++) {

		if ((n % i) == 0) {

			r = 0; // 指数カウンタクリア

			do {

				r++; // 指数カウンタプラス

				n = n / i;

			} while ((n % i) == 0);

			// 素因数iを指数とともに保存
			result[i]=r;

		}

	}

	// 残った素数を追加
	if (n > s) {
		result[n] = 1;
	}

	return result;

}