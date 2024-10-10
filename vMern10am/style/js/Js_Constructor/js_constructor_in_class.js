

class Test{
    constructor(){
        console.log(`Constructing class Test`)
    }
    show(){
        console.log(`In show() of Test class`)
    }
    display(){
        console.log(`In display() of Test class`)
    }
}

var obj = new Test()   //even constructor called automatically

// obj.show()
// obj.display()