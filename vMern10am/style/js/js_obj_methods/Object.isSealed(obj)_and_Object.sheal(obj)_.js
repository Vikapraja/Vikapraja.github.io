// Object.isSealed(obj) : check wether an object is sealed or not.
            //    after seal an object prevent(stop) properties to be added or deleted
            //    but updation can possible.

var emp={
    id:1001,
    name:"viveka",
    dsg:"Student",
    salary:-23000,
    city:"Gorakhapur",
    state:"Up"

}

console.log(Object.isSealed(emp))
console.log(emp)


emp.phone=7080508087 // adding a property
emp.name="Vivekanand"  //updation
delete emp.state  //deletion

console.log(emp)

Object.seal(emp)

emp.state="up"  //addition of properties
emp.name="Vivekanand Prajapati"  //updation pf properties
delete emp.city  //deletition

console.log(Object.isSealed(emp))
console.log(emp)


