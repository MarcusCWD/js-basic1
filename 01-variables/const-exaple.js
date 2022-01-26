// const means constant
const pi=3.14;      // cannot be reassinged
pi=5.14;
console.log(pi);
// result - TypeError: Assignment to constant variable.

// The idea of const is that it reflect that it is important
//Those values is significant eg: pi will always be 3.14

// why can const in array possible to change?
const primes= [2,3,7];
primes[0]=13;
console.log(primes);
// because the const is on the array called primes.
// the value in the array is NOT a const and thus can be changed

