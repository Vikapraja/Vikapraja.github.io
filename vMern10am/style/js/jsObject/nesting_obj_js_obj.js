// Nesting object [obj in obj]

var emp={
    id:1001,
    name:`Vivek`,
    dsg:`Trainer`,
    salary:135000,
    active:true,
    subject:["Mern Stack","Mean Stack","Meav Stack","Python","Java"],
    address:{
        house:"A-82",
        street:"23",
        locality:"Ashok-Nagar",
        pin:110006,
        city:"Noida",
        state:"UP"

    }
}

console.log(emp)
console.log(emp.subject)
console.log(emp.subject[2])

console.log(emp.address)
console.log(emp.address.city)

