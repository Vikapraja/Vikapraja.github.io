// concat(): 

var a = [1,2,3,4,5]
var b = [10,20,30,40,50]
var c = [100,200,300,400.500]
var d = ["Nitin","Amit","Sumit","Vicky","Jitender"]
var e = [true,false,true,true,true,false,false]

console.log(`arrays items-> a=${a}\n b=${b}\n c=${c}\n d=${d}\n e=${e}`)

f=a.concat(b,c,d,e)

console.log(`after a.concat(a,bc,d,e)= ${f}`)
