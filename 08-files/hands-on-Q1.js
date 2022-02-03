//----------------------------------------SOLUTION 1----------------------------------------//
// const fs = require('fs')

// let data = fs.readFileSync("data.txt")
// let fruits = data.toString().split('\n')
// console.log(fruits)

// let total = 0
// let kindFruit = []

// for (let kindOfFruit of fruits){
//     kindFruit.push(kindOfFruit.toLowerCase())
// }

// // console.log(kindFruit)

// for (let kind of kindFruit){
//     if (kind == 'apple'){
//         total = total + 0.5
//     }
//     else if (kind == 'orange'){
//         total = total + 0.70
//     }
//     else if (kind == 'pineapple'){
//         total = total + 1.00
//     }
//     else if (kind == 'watermelon'){
//         total = total + 2.50
//     }
//     else if (kind == 'durian'){
//         total = total + 10.00
//     }
// } 

// console.log(total)
//----------------------------------------SOLUTION 2----------------------------------------//

const fs = require('fs')

let data = fs.readFileSync("data.txt")
let fruits = data.toString().split('\n')
// console.log(fruits)

let total = 0

let dicFruits = {  
    'apple': 0.5,
    'orange': 0.7,
    'pineapple': 1.00,
    'watermelon': 2.50,
    'durian' : 10.00

}

for (let iFruits of fruits){
    let f = iFruits.toLowerCase().trim()
    total = total + dicFruits[f]
    
}

console.log(total)

