let fruits =[]; //declar empty array
let numbers =new Array(); //declare empty array too
let allZeroes = new Array(10); // 10 empty items in array
console.log(allZeroes);

let fruit = ["mango", "orange", "peach"];
console.log("food: ", fruit[1]);

// ressignment of index 2 of array
fruit[2]="durian";
console.log("new food: ",fruit);

// complex array
let complex = [1, 2, 3, "A", "B", [["ALPHA"], "BETA"], "C"];
console.log(complex[5][0][0]); //print "ALPHA"

// array are reference values
let n1 =["2", 1 , 5];
let n2 = n1;
n1[1] = 10 ;
console.log(n2);
// you would think that n2 would consist of ["2", 1, 5]
// but it is not! ["2", 10, 5] is the answer.
// this is false because n1 and n2 SHARES the 
// same reference and memory.


// non-reference value
let n3 = 2;
let n4 = n1;
n1[1] = 10 ;
console.log(n2);

// array are reference values
let n5 =["2", 1 , 5];
let n6 = n1;
n1[1] = 10 ;
console.log(n2);
// you would think that n2 would consist of ["2", 1, 5]
// this is false because n1 and n2 SHARES the 
// same reference and memory.