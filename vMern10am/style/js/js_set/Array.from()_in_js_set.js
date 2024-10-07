// Array.from() : convert set to Array. 

var a=[10,20,30,40,50,60,70,80,90,100,30,40,50,60]

var b=new Set(a)
console.log(b)

c= Array.from(b)  // Array by set 
console.log(c)