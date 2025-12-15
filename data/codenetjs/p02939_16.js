function Main(input) {
 
    input = input.trim();
    var a = '';
    var tmp = '';
    var ans = new Array();
    var i = 0;
    while (input.length > 0) {
        i = 1;
        a = input.substr(0, 3);
        while (a.length > 0) {
            tmp += a.substr(0, i)
            a = a.slice(i);
            if (tmp != a.substr(0, tmp.length)) {
 
                if (ans.length === 0) {
                    ans.push(tmp);
                    tmp = '';
                }
                else if (ans.slice(-1) != tmp) {   
                    ans.push(tmp);
                    tmp = '';
                }
            }
            else {
                ans.push(tmp);
                tmp = '';
                i = 2;
            }
        }
        input = input.slice(3);
    }
 
    console.log(ans.length);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));