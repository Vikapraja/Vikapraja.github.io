/*
array: push() pop() shift() unshift() splice() delete
push():   insert one or more then one element in last of an array
          and return updated length of array
pop()     delete an element from last of an array and return deleted
          array element
unshift() insert one or more then one element element in starting
          of an array and return updated length of array
shift()   delete an element from first position of an array and return deleted
          array element
splice()  used to insert or delete or update elements from any
          specific position of array and return array of deleted
          elements
          syntax:
          array.splice(pos,numberOfItemToDelete,[itemstoInsert])

delete  : it delete an item from array and leave empty space
*/

//slice() return a list of items from pos to pos


//concat()

//entries() generate an iterator which contains key and value of items
// ----------------------------------------------------------------------

//1) toString() function convert an array into string and use (,)comma as separator defaultly

a=[0,1,2,3,4,5]
console.log(a)

console.log(a.toString())
console.log(a.join(" "))
console.log(a.join('.'))
console.log(a.join("/"))
console.log(a.join(`:`))