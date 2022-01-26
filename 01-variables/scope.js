const prompt = require ("prompt-sync")();

let age = parseInt(prompt("please enter you age"));
if (age <67){
    console.log("you cannot retire yet");
    console.log("you cpf money is still frozen");
    let x= 42;
}

console.log(x);
// this print will have an error because x
// is not in the global scope
// it is only defined in the if statement
