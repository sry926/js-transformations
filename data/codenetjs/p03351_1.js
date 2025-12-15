function main(input){
	input=input.trim();
	const a=input.split(' ').map(Number);
	console.log(Math.abs(a[2]-a[0])<=a[3] || (Math.abs(a[1]-a[0])<=a[3] && Math.abs(a[1]-a[2])<=a[3])?'Yes':'No');
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
