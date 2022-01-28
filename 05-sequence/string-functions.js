let phrase = "The quick brow fox" 

// accessing the string at the 5th position
console.log(phrase[4])

// length of the phrase
console.log(phrase.length)

// string slicing
// start slicing from index 3 all the way to the end
console.log(phrase.slice(3))

//start slicing at index 6 (include)
// end slice at index 12 (exclude)
console.log(phrase.slice(6,12))

//trying to slice from the back
console.log(phrase.slice(-5))
// result - w fox

//trying to slice from the back
console.log(phrase.slice(-1 ,-5))
// result - error
// cannot use neg index to slice a subsection of strings in JS

// change string to upper case
console.log(phrase.toUpperCase())

// change string to lower case
console.log(phrase.toLowerCase())

let phraseTrim = "    1234"
// change string to lower case
// removes all empty space
console.log(phraseTrim.trim() + "!")

// check if certaint substring in a phrase
// note it is case sensitive
console.log(phraseTrim.includes("234"))
// results - true

// check the first occurence of the substring
console.log(phrase.indexOf("quick"))
// result - 4

// split function will split to a array
let lunch = "chicken, duck, fish, veg"
console.log(lunch.split(','))
// result - ['chicken', 'duck', 'fish' , 'veg']