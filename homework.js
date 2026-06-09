// 1.) Write a program to compute the sum of the first 10 natural numbers.
// Expected Output :
// The first 10 natural number is :
// 1 2 3 4 5 6 7 8 9 10
// The Sum is : 55

//            ANS

sumOFTen = 0;
for (let i = 0; i <= 10; i++){
    sumOFTen = sumOFTen + i
}
console.log(`The total sum is: ${sumOFTen}`)



// 2.) Write a program to display n terms of natural numbers and their sum.
// Test Data : 7
// Expected Output :
// The first 7 natural number is :
// 1 2 3 4 5 6 7
// The Sum of Natural Number upto 7 terms : 28

num = 0;
n = 8;
for (let i = 1; i <= n; i++){
    num = num + i
}
console.log(`The sum of natural number upto ${n} terms is : ${num}`)


// 3.) Write a  program to display the sum of n terms of even natural numbers.
// Test Data :
// Input number of terms : 5
// Expected Output :
// The even numbers are :2 4 6 8 10
// The Sum of even Natural Number up to 5 terms : 30



// 4.) Write a program to display the multiplication table for a given integer.
// Test Data :
// Input the number (Table to be calculated) : 15
// Expected Output :
// 15 X 1 = 15
// 15 X 2 = 30
// 15 X 3 = 45
// 15 X 4 = 60
// ...
// 15 X 10 = 150

//         ANS

multNum = 15;

for (let i = 1; i < multNum + 1; i++){
    console.log(`${multNum} x ${i} is: ${multNum * i}`)
}




// 5.) Use a while loop to find the factorial of any number.




// 6.) Write a program to check if a number is palindrome
// For Example
// 432234 is palindrome number, but 54321 is not a palindrome number.

//     ANS



// 7.) Write a program to reverse an array.

//     ANS

array = [9,5,3,4,2,6,7,8,1,0]
array.sort((a,b) => b - a)
console.log(array)