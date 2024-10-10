

class Test{
        show1(){
            console.log("In show1() of Test Class")
        }
    }
    class Child extends Test{
        constructor(){
            super()
            console.log("Constructing Child Test")
        }
        show2(){
            console.log("In show2() of Test Class")
        }
    }
    var obj = new Child()
    obj.show1()
    obj.show2()