// Ask the user for a string, and then two integers.

// Print out the substring, using the first integer as the start index and the second integer as the last index.

// Test Cases

// > Go big or go home
// > 2
// > 4
// b
// > Go big or go home
// > 2
// > 4
// b
// > The quick brown fox jumped over the lazy dog.
// > 4
// > 19
// quick brown fox
// > The quick brown fox jumped over the lazy dog.
// > 4
// > 19
// quick brown fox
// > fly me to the moon
// > 0
// > 18
// fly me to the moon

let inputStr = prompt("")
let inputInt1 = prompt("")
let inputInt2 = prompt("")

console.log(inputStr.slice(inputInt1, inputInt2))