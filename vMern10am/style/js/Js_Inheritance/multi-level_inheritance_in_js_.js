//multilevel Inheritance: when a child class inherit another child class


class Test{
    constructor(){
        this.a = [10,20,30,40,50,60,70,80,90,100]
    }
}
class Child1 extends Test{
    display(){
        console.log(this.a)
    }
}
class Child2 extends Child1{
    reverse(){
        this.a.reverse()    //doing reverse array
    }
}
var obj = new Child2()
console.log("Original Array is")
obj.display()

obj.reverse()
console.log("Reversed Array is")
obj.display()
