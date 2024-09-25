// entries() :generate an array_iterator(object) which contains all items(key and value) of an array.

console.log(`Items of array ->`)
var a = [1,2,3,4,5]
for(let items of a.entries()){
    console.log(items)
}

console.log(a.entries())