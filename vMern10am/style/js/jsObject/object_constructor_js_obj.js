// object constructor : A special function that create and intializes an object instance of a class
    // constructor gets called when object is created using new keyword .

var Epmloyee=function(id,name,salary,city,state){
    this.id=id
    this.name=name
    this.salary=salary
    this.city=city
    this.state=state
}

var emp1=new Epmloyee(1001,"Viveka",-25000,"Gorakhapur","UP")
var emp2=new Epmloyee(1001,"Vivekanand",-20000,"Gorakhapur","UP")
var emp3=new Epmloyee(1001,"Vivekanand Prajapati",-23000,"Gorakhapur","UP")

console.log(emp1)
console.log(emp2)
console.log(emp3)


