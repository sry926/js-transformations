process.stdin.resume();
process.stdin.setEncoding('utf8');

class Dice {
   constructor(top, front, right, left, back, bottom) {
       this.top = top;
       this.front = front;
       this.right = right;
       this.left = left;
       this.back = back;
       this.bottom = bottom;
   }
   rollVertical() {
       return new Dice(this.front, this.bottom, this.right, this.left, this.top, this.back);
   }
   rollHorizontal() {
       return new Dice(this.top, this.right, this.back, this.front, this.left, this.bottom);
   }
   existVertial(number) {
       return [this.top, this.front, this.bottom, this.back].includes(number);
   }
   existHorizontal(number) {
       return [this.front, this.left, this.back, this.right].includes(number);
   }
   fit(top, front) {
       let dice = this;
       if (!dice.existVertial(top)) {
           dice = dice.rollHorizontal();
       }

       let isNotTop = true;
       
       while (isNotTop) {
           dice = dice.rollVertical();
           if (dice.top === top) {
               isNotTop = false;
           }
       }
       
       let isNotFront = true;
       while (isNotFront) {
           dice = dice.rollHorizontal();
           if (dice.front === front) {
               isNotFront = false;
           }
       }
       return dice;
   }
}


process.stdin.on('data', function (chunk) {
   const n = chunk.toString() // 文字列化する
       .split("\n") // \nで分割
       .filter(x => x !== "");

   const [diceNumber, qNumber, ...questions] = n;
   const [top, front, right, left, back, bottom] = diceNumber.split(" ");

   questions.forEach(q => {
       const dice = new Dice(top, front, right, left, back, bottom);
       const qq = q.split(" ");
       console.log((dice.fit(qq[0], qq[1])).right);
   })

});
