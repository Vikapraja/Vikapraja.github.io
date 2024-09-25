//1st type to create an array using array literal style
var a = [10,20,30,40,50,60,"Hello World",true,false,[1,2,4,5]]
console.log(a)

console.log(`array's 7th value= ${a[6]}`)

console.log(`8th value=${a[9]}`)

// Array are mutable proof following: 
console.log(`Checking that array is mutable (by chenging any value of array \n`)
console.log(`Base Array =${a}`)
a[8]=`Jaiho`

console.log(`after changing array's 8th value new array=${a}`)
