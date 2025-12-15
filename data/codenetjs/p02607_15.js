function Main(input) {
	const n = input.split("\n")[0]
	const ar = input.split("\n")[1].split(" ")
	ar2 = ar.filter((num, i)=> {
        return num % 2 === 0 ? false : i % 2 === 0 ? false : true;
    })
    console.log(ar2.length);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));