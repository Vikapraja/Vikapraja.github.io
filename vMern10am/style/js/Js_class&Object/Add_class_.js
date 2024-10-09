
class Add{
    setData(x,y){
        this.a=x
        this.b=y
        this.sum=this.a+this.b

    }
    display(){
        console.log(`${this.a}+${this.b}=${this.sum}`)
    }
}

var obj = new Add
var obj2=new Add


obj.setData(10,20)

obj.display()
obj2.display()  //undefined

