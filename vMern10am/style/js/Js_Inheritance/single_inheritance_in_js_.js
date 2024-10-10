//single Inheritance exapmle
//Single Inheritance: when a single child class inherit a single parent class


class Test{
    constructor(x,y){
        this.a = x
        this.b = y
    }
}
class Add extends Test{
    display(){
        this.sum = this.a+this.b
        console.log(`${this.a} + ${this.b} = ${this.sum}`)
    }
}
var obj = new Add(10,20)
obj.display()
