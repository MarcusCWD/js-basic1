// Write a function that asks the user for a filename, such as "dog.jpg" or "microsoft.doc".

// Extract out and return the extension of the file (for example, if the user provides "dog.jpg", then print out ".jpg".

// Call the function.


function fileName () {
    let userInput = prompt("")
    let x = userInput.indexOf(".")
    let output = userInput.slice(x)
    console.log(output);
  }
  
  fileName()