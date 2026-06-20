

// /*
//     for (initial_value; condition; value_increment or value_decrement) {
    
//         body of loop

//     }

// */



// let g = 0;
// let b = 0;

// let ba = ["r", "b", "r", "r", "b", "b", "r"]


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

// sum = 0;

// for (let i = 10; i < 25+1 ; i++){
//     if (i % 2 !== 0)
//         sum = sum+i
// }
// console.log(sum)


// let n = 7;
// for (let i = 1; i <= n; i++){
//     for (let j = 0; j<i; j++){
//         process.stdout.write('* ');
//     }

//     process.stdout.write("\n");
// }

// let n = 4;
// for (let i = 1; i <= n; i++){
//     for (let s = 0; s < n; s++){
//         process.stdout.write(" * ")
//     }

//     process.stdout.write("\n")
// }






myArray = new Array("school", "book", "pen")
myArray.reverse()
console.log(myArray)
console.log(myArray.indexOf("pen"))

myArray.push("pencil")
console.log(myArray)
myArray.unshift("phone")
console.log(myArray)

myArray.splice(-3)
console.log(myArray)

myArray.push("book","school","pencil")
console.log(myArray)
myArray.splice(-3, 2)
console.log(myArray)


console.log("-----------------------------------------------------------------------------------------")

//     JAVASCRIPT OBJECTS
let fruits = ["mango", "banana", "strawberry", "guava", "pawpaw"]

const inventory = {"apple" : 50, "mangoes" : 100, "banana" : 75, "strawberry" : 30, "guava" : 20};

const user = {
    name: "alice",
    age: 18,

    greet(){
        return ` Hello, my name is ${this.name}.`;
    }
}
// Object.keys(obj);
// Object.values(obj);
// Object.entries(obj);
// Object.fromEntries(pairs);

// fruits.forEach(fruit => {
//     console.log(fruit);
    
// })

// console.log(user.greet())


let inventoryArray = Object.entries(inventory)
let inventoryKeys = Object.values(inventory)


let min = inventoryArray[0][1]
let inventoryName = inventoryArray[0][0];
console.log(min);
inventoryArray.forEach((values) =>{

    if (values[1] < min){
        min = values[1];
        inventoryName = values[0];
    }

})
console.log(inventoryName)
console.log(min);
