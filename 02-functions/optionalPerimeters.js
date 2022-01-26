const prompt = require('prompt-sync')()


//-----------------------------------------------------------//
function calWithGST(bill,gstPer){
    let gst = bill * gstPer;
    let total = bill + gst;
    return total;
}


let bill = parseFloat(prompt("please enter the bill: "))
let total = calWithGST(bill, 0.07)
console.log("total: ", total)


//-----------------------------------------------------------//
// we can force the value in parameter of the function
function calWithGST(bill,gstPer=0.07){
    let gst = bill * gstPer;
    let total = bill + gst;
    return total;
}

//we can ignore the second parameter too
//option argument
let bill = parseFloat(prompt("please enter the bill: "))
let total = calWithGST(bill)
console.log("total: ", total)


//-----------------------------------------------------------//
// we can force the value in parameter of the function
function calWithGST(bill,gstPer){
    let gst = bill * gstPer;
    let total = bill + gst;
    return total;
}

//we can ignore the second parameter too
//option argument
let bill = parseFloat(prompt("please enter the bill: "))
let total = calWithGST(bill, 0.07)
console.log("total: ", total)