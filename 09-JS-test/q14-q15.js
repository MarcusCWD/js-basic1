let total = 0;
function sumThree(x,y,z) {
  total = x + y + z; // total = total + x + y + z
  return total;
}

let s1 = sumThree(1, 2, 3); // returns 6, is correct
let s2 = sumThree(4, 5, 6); // returns 22, which is wrong

console.log(s1)
console.log(s2)



