function Main(input) {
 　input = input.trim();
  while(input.indexOf("ST") != -1){
        input = input.replace(/ST/g,"");
  }
  console.log(input.length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
