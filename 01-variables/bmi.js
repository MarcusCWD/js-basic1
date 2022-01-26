const prompt = require ("prompt-sync")();

let weight = parseFloat(prompt("please enter your weight: "));
let height = prompt("please enter you height");
let bmi = weight / height**2;
console.log("bmi=",bmi);