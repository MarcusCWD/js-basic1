let colors = ['black', 'azure', 'orange', 'white', 'tan', 'red', 'blue', 'green'];
let nums = [2, 3, 1, 4, 2, 1, 1, 0, 5]

function magic(x) {
   x[2] = x[2] + 1;
   x[3] = x[3] + 2;
}

// colors[ nums.slice(2, 4)[1] ];
// console.log(colors[ [1,4][1] ])
// console.log(colors[ nums.slice(2, 4)[1] ])


//---------------------------------------

// let z = nums;
// z[0] = 4;
// z[1] = 5;
// z[2] = 6;
// // z = [4, 5, 6, 4, 2, 1, 1, 0, 5]
// console.log(colors[nums.slice(1,4)[1]])

//-------------------------------------
// nums.splice(3, 2)
// console.log(nums)
// console.log(colors[nums[4] + nums[5]])

//---------------------------------------
magic(nums)
console.log(colors[colors[nums[7] + nums[2]].length])