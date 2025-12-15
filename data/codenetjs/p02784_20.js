const Main = (input) => {
        const dataArray = input.split('\n');
  		const strength = dataArray[0].split(' ')[0];
  		const deathblowType = dataArray[0].split(' ')[1];
		const deathblowList = dataArray[1].split(' ').map(Number);
  		var totalAttack = 0;
  
  for (var i = 0; i < deathblowType; i ++){
    totalAttack += deathblowList[i];
  }
  if (totalAttack >= strength) {
    console.log('Yes');
  } else {
    console.log('No');
  }
    }

    Main(require("fs").readFileSync("/dev/stdin", "utf8"));