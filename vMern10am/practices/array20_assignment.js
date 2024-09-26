// 1. WAP to implement an Array by reading input from user
// 2. WAP to implement an Array by using random numbers
// 3. WAP to implement an Array by using febonacci Series Terms
// 4. WAP to Calculate sum of Elements of Array
// 5. WAP to Calculate sum of Even and Odd Elements of Array also
//    count them
// 6. WAP to Calculate sum of Prime and not Prime Elements of Array
//    also calculate them
// 7. WAP to find smallest Element from Array
// 8. WAP to find greatest Element from Array
// 9. WAP to calculate occurrence of -ve,+ve and 0 in Array
// 10. WAP to find first smallest,Second Smallest and third smallest
//     Element from Array
// 11. WAP to find first greatest,Second greatest and third greatest
//     Element from Array
// 12. WAP find nth smallest Elements from Array
// 13. WAP find nth greatest Elements from Array
// 14. WAP reverse an Array
// 15. WAP to Swap two Arrays
// 16. WAP to concate two Arrays
// 17. WAP to insert an Element  at user's Specific Position
// 18. WAP to Delete an Element  from user's Specific Position
// 19. WAP to Delete any particular Element from all indexes from Array
// 20. WAP to Delete all -ve Elements from Array
// 21. WAP to Delete all odd Elements from Array
// 22. WAP to Delete all non prime Elements from Array
// 23. WAP to Delete all repeated Elements from Array
// 24. WAP to count occurrance of any particular Element from Array
// 25. WAP to count occurrance of all Elements of Array
// 26. WAP to find UNION of two Arrays
// 27. WAP to find Intersection of two Arrays
// 28. WAP to find HCF of Array Elements
// 29. WAP to find LCM of Array Elements

// ===================================================================================
// 1. WAP to implement an Array by reading input from user

// var a=Array()
// a=prompt("Enter array elemets using ',' seprator :")
// document.write(`<h2>Array=[${a}]</h2>`)

// ------------------------------------------------------------------------------------
// 2. WAP to implement an Array by using random numbers
// var a=Array()
// for(let i=0;i<=20;i++){
//     b=parseInt(Math.random(a)*10+1)
//     a.push(b)
// }

// document.write(`<h2>Array By random=[${a}]</h2>`)
// console.log(a)

// ------------------------------------------------------------------------------------
// 3. WAP to implement an Array by using febonacci Series Terms

// var z=Array()
// var n=prompt("Enter till number for  fibonacci-arrays :")

// var a = 0
// var b = 1
// var sum = a + b

// while (sum <= n) {
//     z.push(sum)
//     a = b
//     b = sum
//     sum = a + b
//   }

// document.write(`<h2><hr>Arrays of Fibonacci Serise : [${z}]`)

// ------------------------------------------------------------------------------------
// 4. WAP to Calculate sum of Elements of Array

// var a=[1,2,3,4,5]
// var sum=0
// // for(let i in a){
// //     sum=sum+a[i]
// // }

// // ------------or
// for(let i of a){
//     sum=sum+i
// }

// document.write(`<h2>Sum of Array's : [${a}] elements => ${sum}</h2>`)

// // ------------or

// function fun(prev,current){
//     return prev+current
// }
// var z=a.reduce(fun)

// document.write(`<h2>Sum of Array's : [${a}] elements => ${z}</h2>`)

// ------------------------------------------------------------------------------------
// 5. WAP to Calculate sum of Even and Odd Elements of Array also

// var a =Array(1,2,3,4,5,6,7,8,9,10,12)
// sumOfEven=0
// sumOfOdd=0
// for(let i of a){
//     if(i%2==0){
//         sumOfEven+=i
//     } 
//     else{
//         sumOfOdd+=i
//     } 
// }
// document.write(`<h2>array=[${a}] <hr><br>
//                 Sum of array's even value =>${sumOfEven} <br>
//                 Sum of array's odd value =>${sumOfOdd}               
//             `)
// ------------------------------------------------------------------------------------
// 6. WAP to Calculate sum of Prime and not Prime Elements of Array
//    also calculate them

// var a=[0,1,2,3,4,5,6,7,8,9,10]
// var sumOfPrime=0
// var sumOfNonPrime=0
// for(n of a){
//     var flag = false
//     for (let i = 2; i <= n ** 0.5; i++) {
//         if (n % i == 0) {
//             flag = true
//             break
//         }
//     }
//     if (flag === false && n >= 2)
//         sumOfPrime+=n
//     else
//         sumOfNonPrime+=n
// }
// document.write(`<h2>
//                 Array=>[${a}] <br>
//                 Sum of array's Prime Number Values=> ${sumOfPrime} <br>
//                 Sum of array's Non-Prime Number Values=> ${sumOfNonPrime}
//                 </h2>
//             `)

// ------------------------------------------------------------------------------------
// 7. WAP to find smallest Element from Array

// a=[200,3,4,5,6,7,8,9,10,100]
// var min=0
// let mi=Math.min(...a)
// document.write(`<h2>Smallest element of Array's : [${a}] elements => ${mi}</h2>`)


// ------------------------------------------------------------------------------------
// 8. WAP to find greatest Element from Array

// a=[0,1,200,3,4,5,6,7,8,9,10,100]
// var max=0
// for(let i of a){
//     if(i>max){
//         max=i
//     }
// }
// document.write(`<h2>Greatest element of Array's : [${a}] elements => ${max}</h2>`)

// ----------------or

// a=[0,1,200,3,4,5,6,7,8,9,10,100]
// var max=0
// let ma=Math.max(...a)
// document.write(`<h2>Greatest element of Array's : [${a}] elements => ${ma}</h2>`)


// ------------------------------------------------------------------------------------
// 9. WAP to calculate occurrence of -ve,+ve and 0 in Array

// a=[1,200,3,4,-5,6,0,0,7,8,-9,10,0,100]
// var negitive=0
// var possitive=0
// var zero=0
// for(let i of a){
//     if(i<0)
//         negitive+=1
//     else if(i==0)
//         zero+=1
//     else if(i>0)
//         possitive+=1
// }
// document.write(`<h2>
//                     array= [${a}]<br>
//                     array have ${negitive} negative element <br>
//                     array have ${possitive} possitive element<br>
//                     array have ${zero} zero element 

//                 </h2> 
//                 `)

// ------------------------------------------------------------------------------------
// 10. WAP to find first smallest,Second Smallest and third smallest
//     Element from Array

// var a=[24,40,11,50,60,70,80,35,90]
// var b=[24,40,11,50,60,70,80,35,90]

// var Fsmall=Math.min(...a)
// for(let i in a){
//     if(a[i]==Fsmall)
//         a.splice(i,1)
// }

// let Ssmall=Math.min(...a)
// for(let j in a){
//     if(a[j]==Ssmall)
//         a.splice(j,1)    
// }
// let Tsmall=Math.min(...a)
// document.write(
//     `<h2>base array= [${b}] <br>
//         array's first smallest element ${Fsmall} <br>
//         array's Second smallest element ${Ssmall} <br>
//         array's Third smallest element ${Tsmall} 
//     `
// )

// -----------------------------------------or
// var a=[24,40,11,50,60,70,80,35,90]
// var b=[24,40,11,50,60,70,80,35,90]
// var Fsmall,Ssmall,Tsmall
// for(let k=1;k<=3;k++){
//     var c=Math.min(...a)
//     if(k==1){
//         Fsmall=c
//     }
//     else if(k==2){
//         Ssmall=c
//     }
//     else if(k==3){
//         Tsmall=c
//     }
//     for(let m in a){
//         if(a[m]==c)
//             a.splice(m,1)   
//     }
// }
// document.write(
//     `<h2>base array= [${b}] <br>
//         array's first small element ${Fsmall} <br>
//         array's Second small element ${Ssmall} <br>
//         array's Third small element ${Tsmall} <br>
//     `)

// ------------------------------------------------------------------------------------
// 11. WAP to find first greatest,Second greatest and third greatest
//     Element from Array

// var a=[24,40,11,50,60,70,80,35,90]
// var b=[24,40,11,50,60,70,80,35,90]
// var Fgreatest=Math.max(...a)
// for(let i in a){
//     if(a[i]==Fgreatest)
//         a.splice(i,1)
// }

// var Sgreatest=Math.max(...a)
// for(let j in a){
//     if(a[j]==Sgreatest)
//         a.splice(j,1)    
// }
// var Tgreatest=Math.max(...a)

// document.write(`<h2>base array= [${b}] <br>
//                  array's first greatest element ${Fgreatest} <br>
//                  array's Second greatest element ${Sgreatest} <br>
//                  array's Third greatest element ${Tgreatest} <br>
//                 `)

// --------------------------------------or
// var Fgreatest,Sgreatest,Tgreatest

// for(let k=1;k<=3;k++){
//     var c=Math.max(...a)
//     if(k==1){
//         Fgreatest=c
//     }
//     else if(k==2){
//         Sgreatest=c
//     }
//     else if(k==3){
//         Tgreatest=c
//     }
//     for(let m in a){
//         if(a[m]==c)
//             a.splice(m,1)
//     }
// }

// document.write(`<h2>base array= [${b}] <br>
//                  array's first greatest element ${Fgreatest} <br>
//                  array's Second greatest element ${Sgreatest} <br>
//                  array's Third greatest element ${Tgreatest} <br>
                // `)

// ------------------------------------------------------------------------------------
// 12. WAP find nth smallest Elements from Array

// var a=[9,4,8,5,71,3,10]
// var l=a.length  //after splice() array's length are being chinge
// document.write(`<h2>base array= [${a}] <hr> Arrays nth smallest elements:</h2><br>`)
// for(let i=1;i<=l;i++){
//     for(let m in a){
//         var c=Math.min(...a)
//         if(a[m]==c){
//             document.write(`<h2>${c}</h2>`)
//             a.splice(m,1)
//         }            
//     }
// }
// document.write(a)
// ------------------------------------------------------------------------------------
// 13. WAP find nth greatest Elements from Array

// var a=[9,12,13,14,89,67,90,99]
// var l=a.length  //after splice() array's length are being chinge
// document.write(`<h2>base array= [${a}] <hr> Arrays nth greatest elements:</h2><br>`)
// for(let i=1;i<=l;i++){
//     for(let m in a){
//         var c=Math.max(...a)
//         if(a[m]==c){
//             document.write(`<h2>${i}th greatest=${c}</h2>`)
//             a.splice(m,1)
//         }            
//     }
// }
// document.write(a)

// ------------------------------------------------------------------------------------
// 14. WAP reverse an Array

// a=[1,2,3,4,5]
// b=a.reverse()
// document.write(`<h2>Array [${a}]<br>reversed array=[${b}]</h2>`)

// ------------------------------------------------------------------------------------
// 15. WAP to Swap two Arrays

var a=[1,2,3,4,5]
var b=[6,7,8,9,10]
var c=[]

document.write(`<h2>Before swap two arrays <br> a=[${a}] <br> b=[${b}]</h2>`)

c.push(a)
a.splice(0,a.length)
delete b
// b.splice(0,b.length)
document.write(c)

document.write(`<h2>After swap two arrays <br> a=[${a}] <br> b=[${b}]</h2>`)

// ------------------------------------------------------------------------------------
// 16. WAP to concate two Arrays

// var a=[1,2,3,4,5]
// var b=[6,7,8,9,10]
// var c=a.concat(b)
// document.write(`<h2>array <br> a=[${a}] <br> b=[${b}] <br> after concate=[${c}]`)

// ------------------------------------------------------------------------------------
// 17. WAP to insert an Element  at user's Specific Position

// var a=[1,2,3,4,5]
// document.write(`<h2>array a=[${a}] and array length=>${a.length} </h2>`)
// var pos=Number(prompt("Enter position to insertion :"))
// var ins=Number(prompt(`Enter element to insert on ${pos} position:`))
// a.splice(pos,0,ins)   //splice(position_of_statrting,no_of_deleting_element,insetion_element )
// document.write(`<h2><hr> after insertion on ${pos} position of ${ins} <br> a=>[${a}] <br> Updated array length=>${a.length}`)

// ------------------------------------------------------------------------------------
// 18. WAP to Delete an Element  from user's Specific Position

// var a=[1,2,3,4,5]
// document.write(`<h2>array a=[${a}] </h2>`)
// a.splice(3,1)   //splice(position_of_statrting,no_of_deleting_element,insetion_element )
// document.write(`<h2> after delete of 3rd position's 1 element <br> a=>[${a}]`)

// ------------------------------------------------------------------------------------
// 19. WAP to Delete any particular Element from all indexes from Array

// var a=[1,2,3,4,5]
// document.write(`<h2>array a=[${a}] and array length=>${a.length} </h2>`)
// var pos=Number(prompt("Enter position to delete an element :"))
// a.splice(pos,1)   //splice(position_of_statrting,no_of_deleting_element,insetion_element )
// document.write(`<h2><hr> after delete on ${pos} position <br> a=>[${a}] <br> Updated array length=>${a.length}`)

// ------------------------------------------------------------------------------------
// 20. WAP to Delete all -ve Elements from Array

// var a=[1,2,3,4,5,-45,88,-36,78-4,82]
// document.write(`<h2>array a=[${a}] and array length=>${a.length} </h2>`)
// for(let i in a){
//     if(a[i]<0)
//         a.splice(i,1)
// }
// document.write(`<h2><hr> after delete -ve Number <br> a=>[${a}] <br> Updated array length=>${a.length}`)


// ------------------------------------------------------------------------------------
// 21. WAP to Delete all odd Elements from Array

// ------------------------------------------------------------------------------------
// 22. WAP to Delete all non prime Elements from Array

// ------------------------------------------------------------------------------------
// 23. WAP to Delete all repeated Elements from Array

// ------------------------------------------------------------------------------------
// 24. WAP to count occurrance of any particular Element from Array

// ------------------------------------------------------------------------------------
// 25. WAP to count occurrance of all Elements of Array

// ------------------------------------------------------------------------------------
// 26. WAP to find UNION of two Arrays

// ------------------------------------------------------------------------------------
// 27. WAP to find Intersection of two Arrays

// ------------------------------------------------------------------------------------
// 28. WAP to find HCF of Array Elements

// ------------------------------------------------------------------------------------
// 29. WAP to find LCM of Array Elements

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------