// Break example
let n = 0;
while(n<10) {
    console.log(n);
    if (n > 5) {
        break; // exit the loop
            // and go to the next line
            // after the loop
    }
    n++;
}
console.log("loop ended");


// Continue example
console.log("contuine example-----");
for (let s = 10; s<21; s++) {
    
    if (s==15) {
        continue;   //continue to the start
                    // of the loop
                    //will NOT go to console.log(s)
    }
    console.log(s);
}