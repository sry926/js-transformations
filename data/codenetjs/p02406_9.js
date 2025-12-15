process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk)
{
  var x = parseInt(chunk.trim(), 10);
  var arr = []
  for (i = 1; i <= x; i++) {
    if (i % 3 == 0 || haveThree(i)) {
      arr.push(i);
    }
  }
  console.log(arr.join(" "));
});

function haveThree(num)
{
  if (num == 0) {
    return false;
  } else if (num % 10 == 3) {
    return true;
  } else if (haveThree(Math.floor(num / 10))) {
    return true;
  }
}