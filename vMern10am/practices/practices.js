// var ch = prompt("Enter the Character : ")
// if (ch.length !== 1)
//     document.write(`'${ch}' is Invalid Input`)
// else {
//     if (ch >= 'a' && ch <= 'z') {
//         if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//             document.write(`'${ch}' is a Lower Case Vowel`)
//         else
//             document.write(`'${ch}' is a Lower Case Consonant`)
//     }
//     else if (ch >= 'A' && ch <= 'Z') {
//         if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
//             document.write(`'${ch}' is a Upper Case Vowel`)
//         else
//             document.write(`'${ch}' is a Upper Case Consonant`)
//     }
//     else if (ch >= '0' && ch <= '9')
//         document.write(`'${ch}' is a Digit`)
//     else if (ch == ' ')
//         document.write("Space")
//     else
//         document.write(`'${ch}' is a Special Character`)
// }

// table  #-backstick[ ` ` ]

// var n = Number(prompt("Enter number for it's table :"))
// for(var i=1;i<=10;i++){
//     document.write( ` ${i} x ${n} = ${i*n} <br>`)
// }

// sum of previous no in spesific range

// var start = Number(prompt("Enter the range \n start from:"))
// var end = Number(prompt("end from :"))
// var sum = 0
// for (let i=start;i<=end;i++){
//     sum=sum+i
// }
// document.write(`<h2>Sum from ${start} to ${end}=${sum}</h2>`)

// H.W.--------------------------
// 1)sum of even and odd number in specific range

// (Solution)=>

// var start = Number(prompt("Enter the range \n start from:"))
// var end = Number(prompt("end from :"))
// var sumOfEven = 0
// var sumOfOdd = 0
// for( let i=start;i<=end;i++){
//     if(i%2 != 0){
//         sumOfOdd=sumOfOdd+i
//     }
//     else{
//         sumOfEven=sumOfEven+i
//     }
// }
// document.write(`<h2>sum of even number's between ${start} and ${end} = ${sumOfEven}</h2><br>`)
// document.write(`<h2>sum of odd number's between ${start} and ${end} = ${sumOfOdd}</h2>`)

// -------------------------------------------------------
// 2) WAP to print factorial of any specific Number.
// (Solution)=>

// var n = Number(prompt("Enter number for factorial :"))
// var fact=1
// for(let i=n; i>=1;i--){
//     fact=fact*i
// }
// document.write(`<h2>Factorial of ${n} = ${fact}</h2>`)

// --------------------------------------------------------
// 3)WAP to check wether a number is perfect number. [6,28,496,8128]
// perfect no definition=> Sum of number's divisor is equal to given number is perfect number. Example: [6,28,496,8128]

// (Solution)=>
// var n = Number(prompt("Enter number to check number is perfect or not:"))
// var sumOfDivisor=0
// for(let i=1;i<=n/2;i++){
//     if(n%i==0) sumOfDivisor=sumOfDivisor+i
// }
// if(sumOfDivisor == n){
//     alert(`${n} is perfect number!!`)
//     document.write(`<h2>${n} is perfect number!!</h2>`)
// }
// else{
//     alert(`${n} is Not perfect number!!`)
//     document.write(`<h2>${n} is Not perfect number!!</h2>`)
// }

// ---------------------------------------------------
// 4)WAP to check wether a number is prime number or not.
// (Solution)=>

// var n = Number(prompt("Enter number to check number is prime or not:"))
// var flag=false
// for(let i=2; i<=n**0.5;i++){
//     if(n%i==0){
//         flag=true
//         break
//     }
// }
// if(flag===false && n>=2)
//     document.write(`<h2>${n} is Prime</h2>`)
// else
//     document.write(`<h2>${n} is not prime</h2>`)


// -------------------------------------------------
// 5) WAP to fibonacci series.
// (Solution)=>

// var n = Number(prompt("Enter last term number for  fibonacci serise :"))
// var a = 0
// var b = 1
// var sum = a + b

// document.write(`<h2>fibonacci series till ${n} = > <br><hr>${a}<br>${b}</h2>`)

// while (sum <= n) {
//     document.write(`<h2>${sum}</h2>`)
//     a = b
//     b = sum
//     sum = a + b
// }

// ------------------------------------------------
// 6)WAP to swap of two Number.
// (Solution)=>

// var n = Number(prompt("for swap Enter 1st no :"))
// var p = Number(prompt("for swap Enter 2nd no :"))
// document.write(`<h2> Before swap <br>  First=${n},Second=${p}</h2>`)
// var s=n*p
// n=s/n
// p=s/p
// document.write(`<h2><br>After swap <br> First=${n},Second=${p}</h2>`)

// ---------------------------------------------
// 7)WAP to sum of given number's digit.
// (Solution)=>

// var n = Number(prompt("Enter number for it's digit sum :"))
// var sum=0
// while(n){
//     let r=n%10
//     sum=sum+r
//     n=parseInt(n/10)
// }
// document.write(`<h2>sum of number's digit=${sum}</h2>`)

// -----------------------------------------------------------------------
// 7)WAP to calculate sum of the even and odd digit of a specific given number.
// (Solution)=>

// var n = Number(prompt("Enter number for calculate it's even and odd digit:"))
// var even = 0
// var odd = 0
// while (n) {
//     let r = n % 10
//     if (r % 2 == 0) {
//         even = even + r
//     }
//     else {
//         odd = odd + r
//     }
//     n = parseInt(n / 10)
// }
// document.write(`<h2>Total sum of even digit in given number is : ${even}</h2>`)
// document.write(`<h2><br>Total sum of odd digit in given number is : ${odd}</h2>`)

// --------------------------------------------------------------
// 8)WAP to count the even and odd digit of a specific given number.
// (Solution)=>

//  var n = Number(prompt("Enter number for count it's even and odd digit:"))
//  var even=0
//  var odd=0
// while(n){
//     let r=n%10
//     if(r%2==0){
//         even=even+1
//     }
//     else{
//         odd=odd+1
//     }
//     n=parseInt(n/10)
// }
// document.write(`<h2>Total no of even digit in given number is : ${even}</h2>`)
// document.write(`<h2><br>Total no of odd digit in given number is : ${odd}</h2>`)

// --------------------------------------------------------------
// 9)WAP to reverse the specific given number.
// (Solution)=>

// var n = Number(prompt("Enter number for it's reverse number:"))
// var reverse = 0
// while (n) {
//     let digit = n % 10
//     reverse = reverse * 10 + digit;
//     n = parseInt(n / 10)

// }
// document.write(`<h2>Reverse No of given no is : ${reverse}`)


// --------------------------------------------------------------
// 10)WAP to check NEON number.
// Definition=>the number which is equal to it's square number's digits sum. Exapmle- 9=>81=>8+1=>9 

// (Solution)=>

// var n = Number(prompt("Enter number to check numberc is neon or not :"))
// var sumOfDigit = 0
// var sq= n*n
// var p=sq
// while (sq) {
//     let digit = sq % 10
//     sumOfDigit = sumOfDigit + digit
//     sq = parseInt(sq/10)

// }
// document.write(`<h2>Sum of given Number's square's digit of given number [ ${n} ] = ${sumOfDigit} <br> <u>Square of given number is :[ ${p} ]</u></h2>`)
// if (sumOfDigit == n) {
//     alert(`=> ${n} is NEON number`)
//     document.write(`<br><h3>=> ${n} is NEON number</h3> <hr>`)
// }
// else {
//     alert(`=> ${n} is not NEON number`)
//     document.write(`<br><h3>=> ${n} is not NEON number</h3> <hr>`)

// }

// --------------------------------------------------------------
// 11)WAP to check magical number.
// Definition=>A Magic number (or Magical number) is a number in which the repeated sum of its digits (until a single-digit number is obtained)
//  is 1. If you keep adding the digits of the
//  number until you get a single digit and the result is 1, then it is a Magic number.

// (Solution)=>
// var num = Number(prompt("Enter number to check numberc is neon or not :"))
// var sum=0
// var rev=0
// var n=num
// while(num!=0)
// {
//     let r=num%10
//     sum=sum+r
//     num=parseInt(num/10)
// }
// num=sum
// while(num!=0){
//     let r=num%10
//     rev=rev*10+r
//     num=parseInt(num/10)
// }
// if(sum*rev==n)
//     document.write(`${num} is magiacal number`)
// else
//     document.write(`${num} is not magiacal number`)


// --------------------------------------------------------------
// 12)WAP to check Polindron number.
// Definition=>A palindrome number is a number that remains the same when its digits
//  are reversed. In other words, the number reads the same backward as forward.
// (Solution)=>

// var num = Number(prompt("Enter range\n start from:"))
// var end = Number(prompt(`To:`))
// var count=0
// for(let i=start;i<end;i++){
//     let num=i
//     let rev=0
//     while(num!=0){
//         let r=num%10
//         rev = rev*10+r
//         num=parseInt(num/10)
//     }
//     if(rev===i){
//         count++
//         document.write(`${i}`)
//     }
// }
// document.write(`<br>${num} is polindrone number`)

