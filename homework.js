// 1.) Write a program to compute the sum of the first 10 natural numbers.
// Expected Output :
// The first 10 natural number is :
// 1 2 3 4 5 6 7 8 9 10
// The Sum is : 55

//            ANS

// sumOFTen = 0;
// for (let i = 0; i <= 10; i++){
//     sumOFTen = sumOFTen + i
// }
// console.log(`The total sum is: ${sumOFTen}`)



// 2.) Write a program to display n terms of natural numbers and their sum.
// Test Data : 7
// Expected Output :
// The first 7 natural number is :
// 1 2 3 4 5 6 7
// The Sum of Natural Number upto 7 terms : 28

// num = 0;
// n = 8;
// for (let i = 1; i < n+1; i++){
//     num = num + i
// }
// console.log(`The sum of natural number upto ${n} terms is : ${num}`)


// 3.) Write a program to display the sum of n terms of even natural numbers.
// Test Data :
// Input number of terms : 5
// Expected Output :
// The even numbers are :2 4 6 8 10
// The Sum of even Natural Number up to 5 terms : 30

//       ANS
 
// let n = 7;
// let result = 0;
// for (let i = 1; i <= n; i++) {
//     temp = i * 2
//     console.log(temp); 
//     result = result + temp
// }
// console.log(result); 

// let num = 5;
// results = 0;
// let final_num = num * 2;
// for (let i = 2; i <= final_num; i += 2){
//     console.log(i);
//     results += i;
// }
// console.log(results);


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

// multNum = 2;

// for (let i = 1; i < 10 + 1; i++){
//     console.log(`${multNum} x ${i} is: ${multNum * i}`)
// }



// 5.) Use a while loop to find the factorial of any number.

//      ANS

// let factorial = 5;
// let results = 1;

// while (factorial > 1){
//     results = results * factorial
//     factorial = factorial - 1
// }
// console.log(results)

// let factorial = 5;
// results = 1;

// for (let i = 1; factorial > 1 ; i++){
//     results = results * i
// }
// console.log(results)



// 6.) Write a program to check if a number is palindrome
// For Example
// 432234 is palindrome number, but 54321 is not a palindrome number.


// 7.) Write a program to reverse an array.

//     ANS

// array = [9, 5, 3, 4, 2, 6, 7, 8, 1, 0]
// array.sort((a,b) => b - a)
// console.log(array)






// Problem Set 2
// ============

// 1.) Write a Program to find the maximum and minimum of an Array.

// Input: [22, 6, 43, 5, 9, 26, 12]
// Expected Output: 43, 5

//       ANS

let numsInput = [22, 6, 43, 5, 9, 26, 12];
let min = numsInput[0];
let max = 0;

for (let i = 1; i < numsInput.length; i++){
    if (numsInput[i] < min)
        min = numsInput[i]

    if (numsInput[i] > max)
        max = numsInput[i]
        
}
console.log(` Min is ${min}`)
console.log(` Max is ${max}`)



// 2.) Write a Program to search elements in an array. If the element is present, it should print the index location of the element
// Array: [2, 45, 7, 8, 30, 14, 23, 1]

// Input: 30
// Expected output: 4

//        ANS

let array =  [2, 45, 7, 8, 30, 14, 23, 1];
let inputIndex = 45
for (let i = 0; i < array.length; i++){
    if (inputIndex == array[i])
        console.log(i)
}





// 3.) Write a program to print the first letter of each word.

// Input: Enter str: Complete Computers and Technologies

// Expected Output: C C a T

//    ANS

let inputStr = "Complete Computers and Technologies"





// 4.) Write a program to find the number of vowels in a string
// Input: Orange
// Expected Output: 3

//       ANS

let input = "orange";
let vowels = ["a", "e", "i", "o", "u"];
count = 0;

for (let i = 0; i < input.length; i++){
    if (input[i] === "a"){
        count ++
    } if (input[i] === "e"){
        count ++
    } if (input[i] === "i"){
        count ++
    } if (input[i] === "o"){
        count ++
    }  if (input[i] === "u"){
        count ++
    }
        
}
console.log(count)