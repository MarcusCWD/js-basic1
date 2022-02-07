let keys = {
    'a': [ '7', 2, '3', 5, '8', 1, 7, 8, 1 , 2],
    'b' : {
       'b1': 'base',
       'bay 23':'parking lot 23'
    },
   '31':'thirty one',
   '32': 'thirty two',
   '33': 'thirty three',
   '34': 'thirty-four',
   '35': 'thirty-five',
   'c': ['Charlie', 'Charles', 'Charmile']
}



// let c = 2;
// console.log(keys['c'][c]);

// let x = "3";
// let z = keys[x + keys.a[x]];
// console.log(z)

let v = 'b';
let y = 3;
let z = keys[y.toString() + keys[v].b1.length];
console.log(z)
