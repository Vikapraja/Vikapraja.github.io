var year = Number(prompt("Enter the Year Number : "))
if (year % 400 === 0)
    console.log(`${year} is a Leap Year`)
else if (year % 4 === 0 && year % 100 !== 0)
    console.log(`${year} is a Leap Year`)
else
    console.log(`${year} is not a Leap Year`)

var year = Number(prompt("Enter the Year Number : "))
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
    console.log(`${year} is a Leap Year`)
else
    console.log(`${year} is not a Leap Year`)
