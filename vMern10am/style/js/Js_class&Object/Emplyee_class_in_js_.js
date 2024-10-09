
class Employee{
    setData(id,name,dsg,basicSalary){
        this.id=id
        this.name=name
        this.dsg=dsg
        this.basicSalary=basicSalary
    }
    calculate(){
        if(this.basicSalary<50000){
            this.ta=this.basicSalary*5/100
            this.da=this.basicSalary*7/100
            this.hra=this.basicSalary*9/100
            this.ma=this.basicSalary*10/100
        }
        else{
            this.ta=this.basicSalary*10/100
            this.da=this.basicSalary*17/100
            this.hra=this.basicSalary*19/100
            this.ma=this.basicSalary*20/100
        }
        this.gross=this.basicSalary+this.ta+this.da+this.hra+this.ma
        if(this.gross<80000)
            this.itax=0
        else
            this.itax=(this.gross-80000)*10/100

        this.net=this.gross-this.itax
    }

    display(){
        console.log(`
            Employee Id     :       ${this.id}
            Name            :       ${this.name}
            Designation     :       ${this.dsg}
            Basic-Salary    :       ${this.basicSalary}
            DA              :       ${this.da}
            HRA             :       ${this.hra}
            MA              :       ${this.ma}
            GROSS           :       ${this.gross}
            Itax            :       ${this.itax}
            Net             :       ${this.net}

            `)
    }
}

var obj =new Employee()

obj.setData(1001,`Vivek`,`Trainer`,135000)

obj.calculate()
obj.display()