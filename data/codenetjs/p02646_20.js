function main(input) {
  var prams = input.split('\n');
  var distance = prams[0].split(' ') - prams[1].split(' ');
  var demonSpeed = prams[0].split(' ')[1] * 1;
  var playerSpeed = prams[1].split(' ')[1] * 1;
  var demonPosition = prams[0].split(' ')[0] * 1;
  var playerPosition = prams[1].split(' ')[0] * 1;
  var isCatched = false;
  if (distance < 0) {
    distance = distance * -1;
  }
  for (var i = 0;i < prams[2];i++) {
    if (demonPosition > playerPosition) {
      demonPosition -= demonSpeed;
      playerPosition -= playerSpeed;
    } else {
      demonPosition += demonSpeed;
      playerPosition += playerSpeed;
    }
    distance = demonPosition - playerPosition;
    if (distance < 0) {
      distance = distance * -1;
    }
    if (distance == 0) {
      isCatched = true;
    }
  }
  if (isCatched) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));