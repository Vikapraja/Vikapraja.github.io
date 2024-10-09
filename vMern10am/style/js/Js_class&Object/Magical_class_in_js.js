

class Magiacal{
    setData(x){
        this.n=x
    }
    calculate(){
        let sum=0
        let rev=0
        let num=this.n
        while(num!=0){
            let r = num%10
            sum=sum+r
            num=parseInt(num/10)
        }
        num=sum
        while(num!=0){
            let r=num%10
            rev=rev*10+r
            num=parseInt(num/10)
        }
        if(num*rev===this.n){
            console.log(`${this.n} is magical Number`)
        }
        else{
            console.log(`${this.n} is not magical number`)
        }
    }
}

var obj1=new Magiacal()
var obj2=new Magiacal()
var obj3=new Magiacal()

obj1.setData(1458)
obj2.setData(1729)
obj3.setData(1234)

obj1.calculate()
obj2.calculate()
obj3.calculate()