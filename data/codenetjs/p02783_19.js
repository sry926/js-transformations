const main = input => {
  const data = input.split("\n");
  const ha = data[0].split(" ");

  console.log(Math.ceil(ha[0] / ha[1]));
}

// Don't edit this line!
main(require("fs").readFileSync("/dev/stdin", "utf8"));
