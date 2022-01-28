// CHALLENGES

// 1. Write a function replaceNthCharacter() that takes in three
// arguments. The first argument is a string, the second argument
// is a single character, and the last argument is an index.
// The function will return a string same as the first argument,
// excpet the character at the specific index is the second argument.

// replaceNthCharacter("ABC", 1, "Z") ==> "AZC";
// replaceNthCharacter("Idea", 3, "A") ==> "IdeA";

function nth(argStr,argChar,argIndex){
    let x = argStr.split("")
    // console.log(x)
    x[argIndex] = argChar
    x.join(",")
    return x
}

console.log(nth("ABC", "Z" , 1))