let input = ''

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function(chunk) {
  input += chunk
})
process.stdin.on('end', function() {
  input = input.split('\n')
  main()
})

function main() {
    for(i=0; i<input.length; i++) {
        if(i>=200) {
            return
        }
         input_line = input[i].split(' ') 
         let a = Number(input_line[0])
         let b = Number(input_line[1])
         if(0>a || b>1000000) {
             return
         }
         console.log(String(a + b).length)
    }
}
