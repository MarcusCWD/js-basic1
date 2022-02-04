// Write a program that asks the user to type in a number and add it to the front of the list.

// Display the contents of the final list, which each element being on their own line.

let numbers = [2,4,6,8];

let userInput = parseInt(prompt(""))
numbers.unshift(userInput)

for(let i=0; i <= numbers.length ;i++){
  console.log(numbers[i])
}