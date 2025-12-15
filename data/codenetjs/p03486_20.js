function Main(input) {
  const inputs = input.split("\n");
        s = inputs[0].split("").sort().join("");
        t = inputs[1].split("").sort().reverse().join("");

  if(s<t){
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function debug(){
	var input = document.getElementById("input").value;
	Main(input);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
