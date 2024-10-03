// Adding items in existing object 

var emp={ }

emp.id=1001
emp['name']="Vivek"
emp["dsg"]="Trainer"
emp.salary=135000
emp.city="Kushinagr"
emp.state="UP"

console.log(`Without phone emp`)
console.log(emp)

emp['phone']=7080508087

console.log(`After adding phone emp`)
console.log(emp)
