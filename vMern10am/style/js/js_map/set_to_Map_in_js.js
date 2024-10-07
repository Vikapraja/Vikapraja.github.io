// set() : set of Map insert item in Map and if key already exist then set() update kay's value 

// set() in Map is For insertion 

var data = new Map([
    ["Nitin",135000],
    ["Aman",35000],
    ["Naman",5000],
    ["Nitish",1000],
    ["Vivek",25000]
])

console.log(data)

data.set("Mohit",23000)
data.set("Nidhi",32500)
console.log(data)

