
//Hierarchical Inheriatnce: when a single parent class inherit by more then one child class

class Sample {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}
class Add extends Sample {
    display() {
        console.log(`${this.a} + ${this.b} = ${this.a + this.b}`)
    }
}
class Sub extends Sample {
    display() {
        console.log(`${this.a} - ${this.b} = ${this.a - this.b}`)
    }
}
class Mul extends Sample {
    display() {
        console.log(`${this.a} * ${this.b} = ${this.a * this.b}`)
    }
}
class Div extends Sample {
    display() {
        console.log(`${this.a} / ${this.b} = ${this.a / this.b}`)
    }
}
class Mod extends Sample {
    display() {
        console.log(`${this.a} % ${this.b} = ${this.a % this.b}`)
    }
}
class Pow extends Sample {
    display() {
        console.log(`${this.a} ** ${this.b} = ${this.a ** this.b}`)
    }
}
var obj1 = new Add(15,6)
var obj2 = new Sub(15,6)
var obj3 = new Mul(15,6)
var obj4 = new Div(15,6)
var obj5 = new Mod(15,6)
var obj6 = new Pow(15,6)

obj1.display()
obj2.display()
obj3.display()
obj4.display()
obj5.display()
obj6.display()
