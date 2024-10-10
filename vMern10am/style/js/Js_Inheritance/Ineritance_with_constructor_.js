


class Test{
    constructor(){   //connstructor is that function which called itself automatically at a class creation
        console.log(`In constructor() of Test class`)
    }
    show1(){
        console.log(`In show1() of Test class`)
    }
}

class Child extends Test{
    show2(){
        console.log(`In show2() of Child class`)
    }
}

var obj= new Child()

obj.show1()
obj.show2()
