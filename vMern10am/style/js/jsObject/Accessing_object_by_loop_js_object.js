// Acessing object through loop (only for-in-loop are in use)

// here keys work as index


var emp=new Object()

emp.id=1001
emp['name']="Vivek"
emp["dsg"]="Trainer"
emp.salary=135000
emp.city="Noida"
emp.state="UP"

for(keys in emp){
    console.log(`${keys}=${emp[keys]}`)
}