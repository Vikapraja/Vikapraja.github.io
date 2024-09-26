// filtering functions of arrays that helps in searching

// find()
// findLast()
// findIndex()
// findLastIndex()
// map()
// filter()
// forEach()
// -----------------------------------------
// reduce()
// include()
// -----------------------------------------
// reverse()


// ----------------------------------------------
// ----------------------------------------------

//find()  : return the item from array which pass a test(condition)

// var a = [11, 2, 3, 4, 15, 11, 2, 3, 43, 45, 67, 78, 8, 6, 5, 4, 5, 65, 65, 76, 85, 85, 35, 65, 4]
// for(let item of a){
//     if(item%5==0){
//         console.log(item)
//         break
//     }
// }

// OR------------------------------    OR-------------
// var a = [11, 2, 3, 4, 15, 11, 2, 3, 43, 45, 67, 78, 8, 6, 5, 4, 5, 65, 65, 76, 85, 85, 35, 65, 4]
// function test(item){
//     return item%5==0
// }
// console.log(a.find(test))

// OR------------------------------    OR-------------
// var a = [11, 2, 3, 4, 15, 11, 2, 3, 43, 45, 67, 78, 8, 6, 5, 4, 5, 65, 65, 76, 85, 85, 35, 65, 4]
// console.log(a.find((item)=>item%5==0))

// OR------------------------------    OR-------------
// var a = [11, 2, 3, 4, 15, 11, 2, 3, 43, 45, 67, 78, 8, 6, 5, 4, 5, 65, 65, 76, 85, 85, 35, 65, 4]
// var output=[]
// for(let item of a){
//     output.push(item)
// }
// console.log(output)

// ========================================================================================
//map()   : return an array of containg result for all elements of array by applying a test
// var a = [11, 2, 3, 4, 15, 11, 2, 3, 43, 45, 67, 78, 8, 6, 5, 4, 5, 65, 65, 76, 85, 85, 35, 65, 4]

// function test(item){
//     return item%5==0
// }
// console.log(a.map(test))

// OR------------------------------    OR-------------
// console.log(a.map((item)=>item%5==0))

// =========================================================================
//filter(): return an array of items that pass a test(a type of condition)

// var a = [11, 2, 3, 4, 15, 11, 2, 3, 43, 45, 67, 78, 8, 6, 5, 4, 5, 65, 65, 76, 85, 85, 35, 65, 4]

// function test(item){
//     return item%5==0
// }

// console.log(a.filter(test))

// OR------------------------------    OR-------------

// var a = [11, 2, 3, 4, 15, 11, 2, 3, 43, 45, 67, 78, 8, 6, 5, 4, 5, 65, 65, 76, 85, 85, 35, 65, 4]
// console.log(a.filter((item)=>item%5==0))
// ===============================================================

//findLast()  : return the last item from array which pass a test
//findIndex():retunn the index of item from array which pass a test
//findLastIndex():retun the highest index of item from array which pass a test

//includes() return true if array conatins an item else retur false
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array

//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array

// ==========================================================================================
// var a = [1, 3, 5, 7, 9, 2, 3, 23, 2, 34, 45, 56, 76, 7, 545, 46, 54, 534, 34, 235, 2, 4]

// function test(item){
//   return item%2==0
// // }

// function test(item) {
//   var flag = false
//   for (let i = 2; i <= item ** 0.5; i++) {
//     if (item % i == 0) {
//       flag = true
//       break
//     }
//   }
//   if (flag === false && item >= 2)
//     return true
//   else
//     return false
// }

// console.log(a.find(test))
// console.log(a.findLast(test))
// console.log(a.findIndex(test))
// console.log(a.findLastIndex(test))
// console.log(a.map(test))
// console.log(a.filter(test))

// -----------------------------------------------------------------------------------------
// forEach():
// var a = [1, 3, 5, 7, 9, 2, 3, 23, 2, 34, 45, 56, 76, 7, 545, 46, 54, 534, 34, 235, 2, 4]
// a.forEach((item)=>console.log(`${item*5}`))


// -----------------------------------------------------------------------------------------
// reduce() :

var a = [1, 3, 5, 7, 9, 2]

// function fun(prev,current){
//     return prev+current
// }

// console.log(a.reduce(fun))
// OR------------------------------    OR-------------
// console.log(a.reduce((prev,current)=>prev+current))

// ===================================================================================

//includes() return true if array conatins an item else return false

// var a = [10,20,30,50,20,20,50,20,30,40,50,60,70,10,80,90,100]
// console.log(a.includes(50))
// console.log(a.includes(79))

// -------------------------------------------------------------------------------------
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array

// var a = [10,20,30,50,20,20,50,20,30,40,50,60,70,10,80,90,100]
// console.log(a.indexOf(50))
// console.log(a.indexOf(79))

// -------------------------------------------------------------------------------------
//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array

// var a = [10,20,30,50,20,20,50,20,30,40,50,60,70,10,80,90,100]
// console.log(a.lastIndexOf(50))
// console.log(a.lastIndexOf(79))

