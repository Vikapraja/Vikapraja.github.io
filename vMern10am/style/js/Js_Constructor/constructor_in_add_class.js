

class Add{
    constructor(x=0,y=0){
        this.a=x
        this.b=y
        this.sum=this.a+this.b
    }
    display(){
        console.log(`${this.a}+${this.b}=${this.sum}`)
    }
}

var obj=new Add(10,20)  //argument for constructor parameter

obj.display()