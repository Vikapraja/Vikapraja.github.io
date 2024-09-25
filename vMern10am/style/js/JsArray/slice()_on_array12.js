// slice() : returns a list of items from pos to pos
// syntax :  array.slice(starting_pos,last_pos)

var a = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
console.log(`Array elements(items) = ${a}`)
c=a.slice(10,15)
b=a.slice(5,20)
console.log(`after slice(5,20) sub_array elements = ${b} \n and a.slice(10,15) subarray elements= ${c}`)
