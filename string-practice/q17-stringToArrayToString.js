// Write a function that asks the user for a string, and then print it out WITHOUT the vowels.

// Call the function.

function func(){
    let userInput = prompt("")
    let array = userInput.split("")
    let newArray = []
    // a,e,i,o,u
    //"chicken"
    for (let i = 0; i < array.length; i++){
      if (
      array[i] == 'a'|| 
      array[i] == 'e' ||
      array[i] == 'i' ||
      array[i] == 'o' ||
      array[i] == 'u'){
        continue
      }
      else{
        newArray.push(array[i])
      }
    }
    console.log(newArray.join(""))
  }
  
  // calling function
  func()
  