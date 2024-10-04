// Object.isFreeze() : check whether an object is freeze or not.
                    // after freeze an object prevent(stop) properties to be add and update 
                    // and delete.


var emp={
    id:1001,
    name:"viveka",
    dsg:"Student",
    salary:-23000,
    city:"Gorakhapur",
    state:"Up"

}

console.log(Object.isFrozen(emp))

console.log(emp)

console.log(Object.isFrozen(emp),emp.state)

emp.phone=7080508087 // adding a property
emp.name="Vivekanand"  //updation
delete emp.state  //deletion



console.log(emp)


Object.freeze(emp)
// after freeze not a single attribute(properties) will be add to object
console.log(Object.isFrozen(emp))

emp.state="up"  //addition of properties
emp.name="Vivekanand Prajapati"  //updation pf properties
delete emp.city  //deletition

console.log(emp)
