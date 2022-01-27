const prompt = require ("prompt-sync")();

let numberIn= prompt("please enter and integer number: ")

if (numberIn%2 == 0){
    console.log("Even number")
}
else if(numberIn%2 == 1){
    console.log("Odd number")
}

