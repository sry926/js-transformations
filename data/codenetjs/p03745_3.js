(function(stdin){
  var input = stdin.split("\n");
  var n = parseInt(input[0], 10);
  var a = input[1].split(" ");

  for (var i = 0; i < n; i++) {
    a[i] = parseInt(a[i], 10);
  }

  var ans = 1;
  var up = false;
  var down = false;
  for (var i = 0; i < n - 1; i++) {
    if (a[i] < a[i + 1]) {
      up = true;
    }

    if (a[i] > a[i + 1]) {
      down = true;
    }

    if (up && down) {
      up = false;
      down = false;
      ans++;
    }
  }

  console.log(ans);
})(require("fs").readFileSync("/dev/stdin", "utf8"));
