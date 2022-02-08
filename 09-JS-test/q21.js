function randNumber() {
	return Math.floor(Math.random() * 10); 
}


let accumulator = []     //init array
let i = 0

// while( i < 10){
// let store = randNumber()
//   if (accumulator.includes(store)){    // store in accumulator do not work. only for objects
//         continue
//     }
//   else{
//         accumulator[i] = store;
//         i++;
//     }
// }

while( i < 10){
    let store = randNumber()
      if (! accumulator.includes(store)){    // store in accumulator do not work. only for objects
        accumulator[i] = store;
        i++;
        }
    }


console.log(accumulator)