const prompt = require('prompt-sync')();

console.log("3 || 4 => ", 3 || 4);  // 3 is a truthly...so we take 3
console.log("0 || 4 => ", 0 || 4);  // 0 is falsely... so we take 4
console.log("NaN || 4 => ", NaN || 4); // result - 4
console.log(" ''|| 4 => ", '' || 4); // result - 4
let name = Number(prompt("Enter a name: "));
// if name is empty, set to N/A
name = name || "N/A";
// if user enters "" for name
// name = "" || "N/A"
// name = "N/A"



// AND operator will always be the last one 
console.log("1 && 2 =>", 1 && 2);
console.log("1 && null =>", 1 && null);
