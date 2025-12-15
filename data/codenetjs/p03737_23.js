function Main(input) {
	const result = input.split(/\s+/).map((str) => {
          return str[0].toUpperCase();
        }).join("");
	console.log(result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));