// AND operator. JS we use &&
let raining = false;
let holiday = true;
let weekend = false;

if (raining == false && weekend == true){
    console.log("go to the beach")
}
else{
    console.log("can't go to the beach")
}


// shot way to check variables
if (!raining && weekend){
    console.log("go to the beach")
}
else{
    console.log("can't go to the beach")
}

// OR operator. JS we use ||
console.log("true || false => ", true || false);
console.log("false || true =>", false || true);
console.log("true || true =>", true || true);
console.log("false || false =>", false || false);



// the logical OR short circuit
let x = 4;
let y = 5;
console.log (x == 4 || y > 100 || y < -100 || y > 2000 + x);

function f1() {
    console.log("f1");
    return true;
}

function f2() {
    console.log("f2");
    return false;
}

// f2 won't be called at all due to logical or short circuit
console.log(f1() || f2());

let n1 = 3;
let n2 = 10;
// console.log(n2 < 10 && n1 - n2 > 100 && n2 - n1 < 100 && n1 === 3);
console.log('------------');
console.log(f2() && f1());