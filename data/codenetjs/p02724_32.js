function main(input){
    a=Math.floor(input/500);
    b=Math.floor((input-500*a)/5);
    console.log("%d",a*1000+b*5);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));