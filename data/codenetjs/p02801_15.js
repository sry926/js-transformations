function main(input) {

    var c = input[0]
    
    //文字コードに変換して+1する
    var code = c.charCodeAt(0)
    code++
    console.log(String.fromCharCode(code))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));