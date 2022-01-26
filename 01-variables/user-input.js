// There is NO prompt in browser JS.  We need to install packages!
// There is prompt in NodeJS

// 1. in the terminal: yarn add prompt-sync
// 2. import in prompt sync into our program
const prompt = require("prompt-sync")();

// prompt is the input to ask the user 
let s = prompt("How are you?");
console.log("Hi,",s);