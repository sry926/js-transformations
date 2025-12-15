const zeroPadding = (num, length) => {
  return ('0000000000' + num).slice(-length);
};

const Main = (input) => {
  // 入力値の整形
  /*
  753数を出力する。
  */
  const numberArray = [7, 5, 3];
  const genaratedArray = Array.prototype.concat.apply(
    [],
    Array(Math.pow(3, input.length))
      .fill(0)
      .map((a, b) => {
        return b.toString(3);
      })
      .map((value) => {
        // inputが3桁の場合は
        // 000~222?
        const array = [];
        for (let index = value.length; index <= input.length; index++) {
          array.push(zeroPadding(value, index));
        }
        return array;
      })
  );

  const finalArray = genaratedArray
    .filter((value) => {
      return (
        value.split('').filter((x, i, self) => {
          return self.indexOf(x) === i;
        }).length === 3
      );
    })
    .map((value, index, romArray) => {
      let result = '';
      for (var index = 0; index < value.length; index++) {
        result += String(numberArray[value[index]]);
      }
      return result;
    })
    .filter((x, i, self) => {
      return self.indexOf(x) === i;
    })
    .filter((value) => {
      return Number(value) <= Number(input);
    });

  console.log(finalArray.length);
};

//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
