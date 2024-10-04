// Object.create() : used to create new object by already another created object.
                // it makes already exist object as protype on newly created obbject.

var oldObj={
    a:10,
    b:20
}

var newObj1=Object.create(oldObj)
var newObj2=Object.create(oldObj)

console.log(newObj1.a,newObj1.b,newObj1.c)
console.log(newObj2.a,newObj2.b,newObj2.c)

newObj1.c=30
newObj2.c=30

console.log(newObj1)
console.log(newObj2)

console.log(newObj1.a,newObj1.b,newObj1.c)
console.log(newObj2.a,newObj2.b,newObj2.c)