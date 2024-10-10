
// Inheritance example

class Test{
    show1(){
        console.log(`In show1() of Test class`)
    }
    display(){
        console.log(`In display() of Test class`)
    }
}

class Child extends Test{
    show2(){
        console.log(`In show2() of Child class`)
    }

    display(){
        console.log(`In display() of Child class`)
    }
}

var obj= new Child()

obj.show1()
obj.show2()

obj.display()