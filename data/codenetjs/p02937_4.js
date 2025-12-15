"use strict"

const arg_str = require('fs').readFileSync('/dev/stdin', 'UTF-8')
const args_lines = arg_str.split('\n')
const s = args_lines[0]
const t = args_lines[1]

const t_array = t.split('')

let pos_array = []

t_array.forEach(item=>{
    const pos = s.indexOf(item) + 1
    pos_array.push(pos)
})

const is_eval = pos_array.filter(x=>x==0).length > 0

if(is_eval){
  console.log(-1)
  return
}

let total = 0
pos_array.forEach((item, index)=>{
    if(index == 0){
        total = pos_array[index]
        return
    }
    if(pos_array[index - 1] < pos_array[index]){
        total += pos_array[index] - pos_array[index - 1]
    }else{
        total += s.length - pos_array[index - 1] + pos_array[index]
    }
})

console.log(total)