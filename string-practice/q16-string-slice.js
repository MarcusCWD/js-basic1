// Write a function that asks the user for a filename, such as "dog.jpg" or "microsoft.doc".

// Extract out the extension, and return "image" if it is ".jpg", "document" if it is ".doc" and "none" if otherwise.

// Call the function.

function fileName () {
    let userInput = prompt("")
    let x = userInput.indexOf(".")
    let output = userInput.slice(x)
    if (output == ".jpg"){
      return console.log("image")
    }
    else if (output == ".doc"){
      return console.log("document")
    }
    else{
      return console.log("none")
    }
  }
  
  fileName()