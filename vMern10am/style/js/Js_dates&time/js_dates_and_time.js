//to set date and time
//1st Style : new Date() : return Current Date and time
// var a = new Date()
// console.log(a)
// console.log(a.toString())
// console.log(a.toLocaleString())
// console.log(a.toLocaleDateString())
// console.log(a.toLocaleTimeString())

//2nd Style : new Date(year,month,day,hour,minute,second,milisecond)
//we have to specify atleast two items in Date
//if we pass a single argument in Date then it treat it as miliseconds
// var a = new Date(2024,8,28,9,30,35,2000)
// var b = new Date(2024,8,28,9,30,35)
// var c = new Date(2024,8,28,9,30)
// var d = new Date(2024,8,28,9)
// var e = new Date(2024,8,28)
// var f = new Date(2024,8)
// var g = new Date(2024)
// console.log(a.toLocaleString())
// console.log(b.toLocaleString())
// console.log(c.toLocaleString())
// console.log(d.toLocaleString())
// console.log(e.toLocaleString())
// console.log(f.toLocaleString())
// console.log(g.toLocaleString())

//3rd Style : new Date(miliseconds)
// var a = new Date(9873848046)
// console.log(a.toLocaleString())

//4th Style : new Date(dateString)
// var a = new Date("09/28/2024")  //MM/DD/YYYY
// var b = new Date("09/28/2024 09:30:35")  //MM/DD/YYYY  HH:MM:SS
// console.log(a.toLocaleString())
// console.log(b.toLocaleString())

//to get date and time
var a=new Date()
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds()); //current miliseconds
console.log(a.getUTCDate());
console.log(a.getTime());//miliseconds
console.log(a.getDay()); //week day
console.log(Date.now());//miliseconds