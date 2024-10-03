// object prototype: every object in JavaScript has a built-in property, which is called it's prototype
                    // The prototype is itself an object ,so the prototype will have it's own
                    // prototype , making that's called prototype-chain. 


// need of object properties:

var Epmloyee=function(id,name,dsg,salary,city,state){
    this.id=id
    this.name=name
    this.dsg=dsg
    this.salary=salary
    this.city=city
    this.state=state
    this.cmp="Ducat"   //this properties  created into every object    (need)
    
}

emp1=new Epmloyee(1001,"vivek","Student",-23000,"Gorakhapur","UP")
emp2=new Epmloyee(1002,"viveka","Student",-24000,"Gorakhapur","UP")
emp3=new Epmloyee(1003,"vivekanand","Student",-25000,"Gorakhapur","UP")
emp4=new Epmloyee(1004,"vivekanand Prajapati","Student",-23000,"Gorakhapur","UP")

console.log(emp1,emp2,emp3,emp4)

// ---------------------------------------------------------------------
// solution:

var Epmloyee=function(id,name,dsg,salary,city,state){
    this.id=id
    this.name=name
    this.dsg=dsg
    this.salary=salary
    this.city=city
    this.state=state
    
}

emp1=new Epmloyee(1001,"vivek","Student",-23000,"Gorakhapur","UP")
emp2=new Epmloyee(1002,"viveka","Student",-24000,"Gorakhapur","UP")
emp3=new Epmloyee(1003,"vivekanand","Student",-25000,"Gorakhapur","UP")
emp4=new Epmloyee(1004,"vivekanand Prajapati","Student",-23000,"Gorakhapur","UP")

Epmloyee.prototype.cmp="Ducat"  // new property(prototype)

Epmloyee.prototype.display=function(){    //new property(prototype)
    console.log(`
        Id          :   ${this.id}
        Name        :   ${this.name}
        Designation :   ${this.dsg}
        Salary      :   ${this.salary}
        City        :   ${this.city}
        State       :   ${this.state}
        Campus      :   ${this.cmp}
        `)
}

emp1.display
emp2.display
emp3.display
emp4.display

