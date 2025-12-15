process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.on('SIGINT', function(){
    input_stdin_array = input_stdin.split("\n");
    main();
    process.exit();
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function reverse(cad){
	var ret='';
	for (var i = cad.length-1; i>=0; i--)
		ret+=cad[i];
	return ret;
}

function main() {
	var s = readLine().split(" ");
	var N = parseInt(s[0]), K = parseInt(s[1]), L = parseInt(s[2]);
	
	var G1=[0], G2=[0];
	var C1=[0], C2=[0];
	for ( var i=1; i <= N; i++ ){
		G1.push([]);
		C1.push(0);
		G2.push([]);
		C2.push(0);
	}
	
	for (var i=0; i < K; i++){
		s=readLine().split(" ");
		var a = parseInt(s[0]), b = parseInt(s[1]);
		G1[a].push(b);
		G1[b].push(a);
	}
	
	for (var i=0; i < L; i++){
		s=readLine().split(" ");
		var a = parseInt(s[0]), b = parseInt(s[1]);
		G2[a].push(b);
		G2[b].push(a);
	}
	
	function dfs(nod, G, C, color){
		C[nod] = color;
		for (var i=0; i < G[nod].length; i++){
			if (C[G[nod][i]] == 0){
				dfs(G[nod][i], G, C, color);
			}
		}
	}
	
	var col1=0, col2=0;
	for (var i=1; i <= N; i++){
		if (C1[i] == 0){
			col1++;
			dfs(i,G1,C1,col1);
		}
		if (C2[i] == 0){
			col2++;
			dfs(i,G2,C2,col2);
		}
	}
	
	var map = {}
	for (var i=1; i <= N; i++){
		var atrib = C1[i].toString() + "_" + C2[i].toString();
		if (map[atrib] == undefined){
			map[atrib] = 1;
		} else {
			map[atrib]++;
		}
	}
	
	var atrib = C1[1].toString() + "_" + C2[1].toString();
	var ans=map[atrib];
	for (var i=2; i <= N; i++){
		atrib = C1[i].toString() + "_" + C2[i].toString();
		ans += " " + map[atrib];
	}
	
	console.log(ans);
	
}
