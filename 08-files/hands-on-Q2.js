//-------------------------------solution 1-------------------------------------//
// const prompt = require("prompt-sync")();
// const fs = require('fs');

// let fruits = "";
// while(true){
//     let x = prompt("Enter Fruit: ") 
//     if (x.toLowerCase != 'apple' &&
//         x.toLowerCase != 'orange' &&
//         x.toLowerCase != 'pineapple' &&
//         x.toLowerCase != 'watermelon' &&
//         x.toLowerCase != 'durian' ){
//         console.log("You entered a invalid fruit. program will now end")
//         break
//     }
//     fruits += x + '\n';
//     fs.writeFileSync('output.txt', fruits );
// }
//-------------------------------solution 2-------------------------------------//
const prompt = require("prompt-sync")();
const fs = require('fs');
let validFruits = ['apple','orange','pineapple','watermelon',"durian"]
while(true){
    let x = prompt("Enter Fruit: ") 
    
    if (validFruits.includes(fruit.toLowerCase) ){
        fs.writeFileSync('output.txt', fruits );
    }
    else{
        break
    }
}
