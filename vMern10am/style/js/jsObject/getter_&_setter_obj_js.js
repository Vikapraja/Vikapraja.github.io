// for make function to properties



var emp={
    id:1001,
    name:"Vivek",
    dsg:"Trainer",
    set setSalary(num){
            this.salary=num
    },
    
    get display(){
        console.log(`
            Id          :   ${this.id}
            Name        :   ${this.name}
            Designation :   ${this.dsg}
            Salary      :   ${this.salary} 

            `)
    }
}

emp.setSalary=35000
emp.display

