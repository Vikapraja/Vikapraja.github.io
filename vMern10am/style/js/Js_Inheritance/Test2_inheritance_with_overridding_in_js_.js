// Overridding method of parent/base-class in child class by 'super' keyword




class Test2{
    show1(){
        console.log(`In show1() of Test2 class`)
    }
    display(){          // overriden method
        console.log(`In display() of Test2 class`)
    }
}

class Child extends Test2{
    show2(){
        console.log(`In show2() of Child class`)
    }

    display(){
        super.display()   //overridden Test2's diplay method
        console.log(`In display() of Child class`)
    }
}

var obj= new Child()

obj.show1()
obj.show2()

obj.display()