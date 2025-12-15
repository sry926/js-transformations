var input = ""
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
 
process.stdin.on('end', function() {
  input = input.split("\n");
  i = 0
  while (input[i] != 0) {
    arr = input[i].split(" ");
    if (arr[0] != 0 || arr[1] != 0) {
      ho = "";
      hi = "";

      for (j = 0; j < arr[1]; j++) {
        ho = ho + "#";
        if (j == 0 || j == arr[1] - 1) {
          hi = hi + "#";
        } else {
          hi = hi + ".";
        }
      }

      for (k = 0; k < arr[0]; k++) {
        if (k == 0 || k == arr[0] - 1) {
          console.log(ho);
        } else {
          console.log(hi);
        }
      }
      console.log("");
    }
    i++;
  }
});