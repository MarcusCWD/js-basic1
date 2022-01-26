// unusual and crazy data types in javascript

let something;
console.log("something=", something);
// return - undefined
let s=something + 10;
console.log("s=", s)
// return - NaN: Not a Number
let v=s+20;
console.log("v=",v)
// return - NaN: Not a Number
// This happens because we have a initial undefined number

let i=22/0;
console.log("i=", i)
// return - inf: infinity

let x=null;
// null will alway be an act from the programmer
// no expression will return null data type