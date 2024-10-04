// Object.getOwnPropertyDescriptor(obj,property):  return description of particular property.



var emp={
    id:1001,
    name:"viveka",
    dsg:"Student",
    salary:-23000,
    city:"Gorakhapur",
    state:"Up"

}

console.log(Object.getOwnPropertyDescriptor(emp,"name"))