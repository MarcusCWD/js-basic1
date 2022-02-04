console.log('"" == false',"" == false);                 //falsely  empty string
console.log("[] == false", [] == false);                //falsely  empty array
console.log("0 == false", 0 == false);                  //falsely  0 
console.log("undefined == false", undefined == false);  //truely   undefined
console.log("null == false", null == false);            //truely   null


// For if conditons
//-----------------------------------Weird falsely------------------------------------//

if (undefined) {                                         //falsely  undefined
    console.log("undefined")
}

if (null) {                                              //falsely  null
    console.log(null);
}

if (NaN) {                                              //falsely  NaN
    console.log("Not a number detected");
}

if (0) {                                                //falsely  0
    console.log("Zero found");
}


//-----------------------------------Normal------------------------------------//

if ("") {                                                //falsely  ""
    console.log("Zero found");
}