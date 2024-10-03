//   'this' keyword is represents current obj  itself in object's function 
// we can use object at place of 'this'

var emp={
    id:1001,
    name:"Vivek",
    dsg:"Trainer",
    basic_salary:"78000",
    calculate(){
        this.ta=this.basic_salary*5/100
        this.da=this.basic_salary*7/100
        this.hra=this.basic_salary*10/100
        this.ma=this.basic_salary*12/100
        this.gross=this.basic_salary+this.ta+this.da+this.hra+this.ma
        this.itax=this.gross*10/100
        this.net=this.gross-this.itax
    },
    display(){
        console.log(`
            EmployeeId      :   ${this.id}
            Name            :   ${this.name}
            Designation     :   ${this.dsg}
            Bsic-Salary     :   ${this.basic_salary}
            Ta              :   ${this.ta}
            Da              :   ${this.da}
            Hra             :   ${this.hra}
            Ma              :   ${this.ma}
            Gross-Salary    :   ${this.gross}
            itax            :   ${this.itax}
            Net-Salary      :   ${this.net}
            `)
    }
}

emp.calculate()
emp.display()