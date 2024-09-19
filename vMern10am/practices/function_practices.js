// functions practices\
// --------------------------------------------
// 1)sum of previous number

// function psum(){


// var start = Number(prompt("Enter the range \n start from:"))
// var end = Number(prompt("end from :"))
// var sum = 0
// for (let i=start;i<=end;i++){
//     sum=sum+i
// }
// document.write(`<h2>Sum from ${start} to ${end}=${sum}</h2>`)
// }

// psum()

// --------------------------
//2)sum of even and odd number in specific range

// (Solution)=>

// function sumOfEven_odd(){
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

// }

// sumOfEven_odd()

// -------------------------------------------------------
// 3) WAP to print factorial of any specific Number.
// (Solution)=>

// function factorial(n) {
//     var fact = 1
//     for (let i = n; i >= 1; i--) {
//         fact = fact * i
//     }
//     document.write(`<h2>Factorial of ${n} = ${fact}</h2>`)


// }

// factorial(6)

// --------------------------------------------------------
// 4)WAP to check wether a number is perfect number. [6,28,496,8128]
// perfect no definition=> Sum of number's divisor is equal to given number is perfect number. Example: [6,28,496,8128]

// (Solution)=>

// function perfect(n){

//     var sumOfDivisor=0
//     for(let i=1;i<=n/2;i++){
//         if(n%i==0) sumOfDivisor=sumOfDivisor+i
//     }
//     if(sumOfDivisor == n){
//         alert(`${n} is perfect number!!`)
//         document.write(`<h2>${n} is perfect number!!</h2>`)
//     }
//     else{
//         alert(`${n} is Not perfect number!!`)
//         document.write(`<h2>${n} is Not perfect number!!</h2>`)
//     }

// }

// perfect(6)
// perfect(28)
// perfect(496)
// perfect(8128)

// ---------------------------------------------------
// 5)WAP to check wether a number is prime number or not.
// (Solution)=>

// function prime(n) {

//     var flag = false
//     for (let i = 2; i <= n ** 0.5; i++) {
//         if (n % i == 0) {
//             flag = true
//             break
//         }
//     }
//     if (flag === false && n >= 2)
//         document.write(`<h2>${n} is Prime</h2>`)
//     else
//         document.write(`<h2>${n} is not prime</h2>`)
// }

// prime(2)
// prime(13)
// prime(20)

// -------------------------------------------------
// 6) WAP to fibonacci series.
// (Solution)=>

// function fibonacci(n){
// var a = 0
// var b = 1
// var sum = a + b

// document.write(`<h2>fibonacci series till ${n} = > <br><hr>${a}<br>${b}</h2>`)

// while (sum <= n) {
//     document.write(`<h2>${sum}</h2>`)
//     a = b
//     b = sum
//     sum = a + b
//   }
// }

// fibonacci(20)
// fibonacci(100)

// ------------------------------------------------
// 7)WAP to swap of two Number.
// (Solution)=>

// function swap(n,p){
// document.write(`<h2> Before swap <br>  First=${n},Second=${p}</h2>`)
// var s=n*p
// n=s/n
// p=s/p
// document.write(`<h2><br>After swap <br> First=${n},Second=${p}</h2> <hr>`)
// }

// swap(2,4)
// swap(6,7)

// ---------------------------------------------
// 8)WAP to sum of given number's digit.
// (Solution)=>

// function digitSum(n){
// var p=n
// var sum=0
// while(n){
//     let r=n%10
//     sum=sum+r
//     n=parseInt(n/10)
// }
// document.write(`<h2>sum of number's (${p}) digit=${sum}</h2>`)

// }
// digitSum(1234)
// digitSum(83678)

// -----------------------------------------------------------------------
// 9)WAP to calculate sum of the even and odd digit of a specific given number.
// (Solution)=>

// function sumOfEvenOdd(n){
//     var p=n
//     var even = 0
//     var odd = 0
//     while (n) {
//         let r = n % 10
//         if (r % 2 == 0) {
//             even = even + r
//         }
//         else {
//             odd = odd + r
//         }
//         n = parseInt(n / 10)
//     }
//     document.write(`<h2> Total sum of even digit in given number ( ${p} ) is :<u> ${even}</u></h2>`)
//     document.write(`<h2><br>Total sum of odd digit in given number ( ${p} ) is :<u> ${odd}</u></h2> <hr> `)

// }

// sumOfEvenOdd(1234567890)
// sumOfEvenOdd(9876543210)

// --------------------------------------------------------------
// 10)WAP to reverse the specific given number.
// (Solution)=>

// function reverse(n){
// var p = n 
// var reverse = 0
// while (n) {
//     let digit = n % 10
//     reverse = reverse * 10 + digit;
//     n = parseInt(n / 10)

// }
// document.write(`<h2>Reverse No of given [ ${p} ]is : <u> ${reverse}</u> <hr>`)

// }

// reverse(1234567890)
// reverse(876543210)

// --------------------------------------------------------------
// 11)WAP to check NEON number.
// Definition=>the number which is equal to it's digit's square  sum. Exapmle- 9=>81=>8+1=>9 
// (Solution)=>

// function neon(n){
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
// }
// neon(9)
// neon(10)

// --------------------------------------------------------------
// 12)WAP to check magical number.
// Definition=>A Magic number (or Magical number) is a number in
// which the repeated sum of its digits (until a single-digit number is obtained)
//  is 1. If you keep adding the digits of the
//  number until you get a single digit and the result is 1, then it is a Magic number.

// (Solution)=>


function isMagic(n) {
    var p=n
    var sum = 0
    while (n) {
        let digit = n % 10
        sum = sum + digit
        n = parseInt(n / 10)

    }
    console.log(sum)
}
isMagic(12345)




// --------------------------------------------------------------
// 12)WAP to check Polindron number.
// Definition=>A palindrome number is a number that remains the same when its digits
//  are reversed. In other words, the number reads the same backward as forward.
// (Solution)=>

// function polindrone(start){
// var p=start
// var rev=0
//     while(start!=0){
//         let digit=start%10
//         rev = rev*10+digit
//         start=parseInt(start/10)
//     }
// if(rev==p){
//     document.write(`<h2><br>=> ${p} is polindrone number</h2><hr>`)
//     }
// else{
//     document.write(`<h2><br>=> ${p} is not polindrone number</h2><hr>`)
// }

// }

// polindrone(19)
// polindrone(9)
// polindrone(22)

