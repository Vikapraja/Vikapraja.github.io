// var var_name=new Date(year,month,day,hour,minutes,second,millisecond)

//we have specific twoo items in date 
// if we pass a single arguments in date than it treat it as millisecond


var a = new Date(2024,8,28,9,30,35,2000)
var b = new Date(2024,8,28,10,30,35)
var c = new Date(2024,8,28,10,30)
var d = new Date(2024,8,28,10)
var e = new Date(2024,8,28)
var f = new Date(2024,8)
var g = new Date(2024)


console.log(a.toLocaleString())
console.log(b.toLocaleString())
console.log(c.toLocaleString())
console.log(d.toLocaleString())
console.log(e.toLocaleString())
console.log(f.toLocaleString())
console.log(g.toLocaleString())