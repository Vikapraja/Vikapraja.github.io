// delete(): deletion from Set by delet keyword. 


var a=[10,20,30,40,50,60,70,80,90,100,30,40,50,60]

var b=new Set(a)
console.log(b)

b.add(200) 
console.log(b)

b.delete(50)   //deletion
console.log(b)