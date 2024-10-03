// deleting object's item by 'delet' keyword


var emp={ }

emp.id=1001
emp['name']="Vivek"
emp["dsg"]="Trainer"
emp.salary=135000
emp.city="Kushinagr"
emp.state="UP"
emp.phone=7080508087

console.log(`With phone emp`)
console.log(emp)

delete emp['phone']

console.log(`After deleing phone from emp`)
console.log(emp)