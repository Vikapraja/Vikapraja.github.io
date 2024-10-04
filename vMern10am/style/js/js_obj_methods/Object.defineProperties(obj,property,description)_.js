// Object.defineProperty(obj,property,descriptor)   :used to set Property with details.

// syntax: Object.defineProperties(obj,{property1:description1,property2:description2}) :

var emp={}

Object.defineProperty(emp,"name",{value:"viveka",writable:false })

Object.defineProperties(emp,
    {    "email":{
            value:"vivekanandprjapati959@gmail.com",
            writable:true},
        "phone":{
            value:7080508087,
            writable:false
        }
    }
)

console.log(emp,Object.getOwnPropertyDescriptor(emp,"name"))
console.log(emp,Object.getOwnPropertyDescriptor(emp,"email"))
console.log(emp,Object.getOwnPropertyDescriptor(emp,"phone"))

