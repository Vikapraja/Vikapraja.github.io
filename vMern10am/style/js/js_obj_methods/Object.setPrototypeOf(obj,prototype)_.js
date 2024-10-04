// Object.setPrototypeOf(obj,Prototype) :   used to set prototype(an extra property) of any object.
//      


var emp={
    id:1001,
    name:"viveka",
    dsg:"Student",
    salary:-23000,
    city:"Gorakhapur",
    state:"Up"

}

Object.setPrototypeOf(emp,{phone:7080508087})
console.log(emp.phone,`\n`,emp)


