// let g = 0;
// let b = 0;

// let ba = ["r", "b", "r", "r", "b", "b", "r"]

// /*
//     for (initial_value; condition; value_increment or value_decrement) {
    
//         body of loop

//     }

// */


// for (let i = 0; i < ba.length; i++) {

//     if (ba[i] == "r")
//         b = b + 1;
//     else if (ba[i] == "b")
//         g = g + 1;
// }
// console.log(g, b)


// console.log("#####################################################")

// ages = [20, 17, 3, 5, 8, 21, 10, 4, 14]

// children = 0;
// for (let age = 0; age < ages.length; age++) {

//     if (ages[age] < 10)
//         children++
// }
// console.log(children)


// nums = [20, 17, 3, 5, 8, 21, 10, 4, 14];

// numb = 0;

// for (let number = 0; number < nums.length; number++) {
//     if (nums[number] % 2 === 0)
//        console.log(nums[number])

//     if (nums[number] % 2 === 0)
//        numb++

// }
// console.log(numb)

sum = 0;

for (let i = 10; i < 25+1 ; i++){
    if (i % 2 !== 0)
        sum = sum+i
}
console.log(sum)