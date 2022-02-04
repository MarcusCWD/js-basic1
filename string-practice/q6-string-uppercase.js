// Write a program to ask the user for two strings, and then compare if they are the same.

// The program should print true _if they are equal and false _otherwise.__

// The program must be case insensitive - that is, 'aPPLe' and 'Apple' will be considered as equal.

// Test Cases

// > ABCDEFG
// > abcdefg
// true
// > ABCDEFG
// > abcdefg
// true
// > apple
// > banana
// false
// > apple
// > banana
// false
// > Round and round
// > Round and round
// true

let userInput1 = prompt("")
let userInput2 = prompt("")

if (userInput1.toUpperCase() == userInput2.toUpperCase()){
  console.log(true)
}
else{
  console.log(false)
}
