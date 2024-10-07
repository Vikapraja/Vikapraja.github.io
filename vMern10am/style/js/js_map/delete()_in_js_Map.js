// delete() : used to delete any particular key from Map . 
// Do nothing in case of Empty or invailid key. 




var data = new Map([
    ["Nitin",135000],
    ["Aman",35000],
    ["Naman",5000],
    ["Nitish",1000],
    ["Vivek",25000]
])

console.log(data)

data.delete("Aman") //deleted Aman
console.log(data)

data.delete("Nidhi")  // nothing event
console.log(data)


