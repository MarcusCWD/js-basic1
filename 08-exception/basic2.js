const prompt = require('prompt-sync')();


// throw and catch are a pair
// when we throw, there much be a catch
function askForName() {
    let name = prompt("Enter your name: ");
    if (name == "") {
        throw "User name is empty"
    }
    return name;
}
try {
    let userName = askForName();
    console.log("Welcome", userName);
} catch (err) {
    console.log("You didn't specify your name")
}
console.log("...rest of the program")