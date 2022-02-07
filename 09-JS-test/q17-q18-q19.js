let grid = [
[1, 2, 3, 5, 3],
[2, 1, 4, 2, 7],
[5, 2, 3, 2, 1],
[3, 2, 1, 2, 4],
[6, 0, 3, -1, 7]

];
    
let items = [
'nothing',
'axe',
'gold',
'silver',
'food',
'water',
'chest'
]

function getGrid(grid, x, y) {
let t = grid[x][y];
grid[x][y] = 0;
return t;
}

function getMagicNumber(w) {
return "abcdefghijklmnopqrstuvwxyz".indexOf(w) % 5;
}



// let z = getGrid(grid, 3, 2);
// console.log(z)

//--------------------------------

// console.log("abcdefghijklmnopqrstuvwxyz".indexOf('h') % 5)

// let z = getGrid(grid, getMagicNumber('b'), getMagicNumber('h'));
// console.log(z)


//--------------------------------
console.log(items[1].length)
console.log(items[2].length)
let z = getGrid(grid, items[1].length, items[2].length);
let m = getGrid(grid, 3, 4);
console.log(z)
console.log(m)


// function produce() {
//     let produced = Math.floor(Math.random() *5) + 4;
//    }
   
//    let num = parseInt(prompt("How many units?"));
   
//    while (num >= 0) {
//     let hours = 0;
//     let p = produced();
//     let num = num - p;
//     console.log("Hour", hours, " produced =>", p, 'left =>', num);
//     hours = hours + 1; 
//    }
   
//    console.log("It takes a total of", hours);
   
