 // values() : generate an array_iterator(object) which contains all values of array.

console.log(`Values of array->`)
var a = [1,2,3,4,5]
for(let values of a.values()){
    console.log(values)
}
