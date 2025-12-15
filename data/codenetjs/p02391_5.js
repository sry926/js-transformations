(function() {
  var isInRange, isNum, reader;

  isNum = function(n) {
    return n.match(/(-|)\d{1,4}/);
  };

  isInRange = function(n) {
    return n >= -1000 && n <= 1000;
  };

  reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  reader.on('line', function(line) {
    var a, b, sp;
    sp = line.split(/\s/);
    a = isNum(sp[0]) ? parseInt(sp[0], 10) : void 0;
    b = isNum(sp[1]) ? parseInt(sp[1], 10) : void 0;
    if (isInRange(a) && isInRange(b)) {
      if (a > b) {
        return console.log("a > b");
      } else if (a < b) {
        return console.log("a < b");
      } else {
        return console.log("a == b");
      }
    }
  });

}).call(this);