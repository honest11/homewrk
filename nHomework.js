// Challenge #1 (BMI Comparison): Calculate and compare Mark and Chris's 
// Body Mass Index using if/else statement that logs a nicely formatted string 
// declaring exactly who has the higher BMI along with its value.

// BIM = mass / height

//       ANS

let mark = 0;
let john = 0;

let bmi = function(weight,height){
    height = height / 100 * 2
    ans = Math.floor(weight / height)
    return ans
}
mark += bmi(60,160)
john += bmi(80,190)

mark > john ? console.log(`Mark has a higher BMI value : ${mark}`) : console.log(`John has a higher BMI value : ${john}`)



// *Challenge #2:*  This challenge tests arrays, functions, and basic logic.
// *The Problem* : Two gymnastics teams, Dolphins and Koalas, compete three times.
// *The Task:* Write a function to calculate the average of 3 scores. Then, create a function checkWinner that takes
//  the average scores as parameters and logs the winner to the console (e.g., "Koalas win (30 vs. 20)").


let dolphins = [4, 7, 4];
let koalas = [6, 4, 1];

let dolphinsScore = 0;
let koalasScore = 0;

let average = function (){
    for (let i = 0; i < dolphins.length; i++){
        dolphinsScore += Math.floor(dolphins[i] / dolphins.length)
    }
    for (let j = 0; j < koalas.length; j++){
        koalasScore += Math.floor(koalas[j] / koalas.length)
    }
}

average()
console.log(dolphinsScore)
console.log(koalasScore)

let checkWinner = function(koalasScore, dolphinsScore){
    if (koalasScore > dolphinsScore){
        console.log(`Koalas win (${koalasScore} vs. ${dolphinsScore})`)
    } else {
        console.log(`Dolphins win (${dolphinsScore} vs. ${koalasScore})`)
    }
}

checkWinner(koalasScore,dolphinsScore)  



// *Challenge #3:* This challenge tests your ability to manipulate data structures.
// *The Problem:*  You are given an array of birth years.
// *The Task:*  Create an array with some given years, create an empty array, then create a function and 
// use a for or while loop to fill the empty array with the calculated ages of the persons and then create 
// a second function to help find the oldest age.
// : In challenge #3, you can use the array method called *push* to fill up the empty array.

let birthYearsArr = [1999, 2001, 2000, 1907, 1956];

let emptyArr = [];

let agesfunc = () =>{
    
    for (let i = 0; i < birthYearsArr.length; i++){

        let currYear = 2026;

        emptyArr.push(currYear - birthYearsArr[i])

    }

    return emptyArr;
}

console.log(agesfunc())


// let oldest = emptyArr[0];

// function oldestAge() {

//     for (let j = 1; emptyArr.length; j++){

//         if (emptyArr[j] > oldest){

//            console.log(emptyArr[j]);
           
//         }
//     }
  
// }

// oldestAge()



const clientYears = [1981, 1999, 2015, 1977, 2007, 1982];

let ages = [];

function fillAges(cAges){
    ages = cAges;
}

function calculatedAges(){
    let age, currentYear = 2026, calculatedAges = [];

    // iterate through the birth years
    for (let i = 0; i < clientYears.length; i++){

        //  get the age

        age = currentYear - clientYears[i];

        // store the age

        calculatedAges.push(age);

    }

    //   fill the ages
    fillAges(calculatedAges);
}

calculatedAges()
console.log(ages)


// let myArray = ["school","book", "pen", ""]
// let i = 5;

// function change(v, id, value){
//     v[id] = value;
// }

// function change2(k){
//     k = 10;
// }

// change(myArray, 0, "mango");
// change2(i);
// console.log(i);
// console.log(myArray)