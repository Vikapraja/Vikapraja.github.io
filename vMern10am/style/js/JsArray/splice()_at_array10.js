// splice() :used to insert or delete elements from any specific position of array and return array of deleted elements
// syntax :  array.splice(pos,NumberOfItemToBeDeleted,[itemToInsert])
// 

a=[1,2,3,4,5,6,7,8]
console.log(`Array elements = ${a}`)
b=a.splice(0,2,[`jaiho`])

console.log(`a.splice(0,2,['jaiho']) = ${b} \nnew array elements = ${a} `)