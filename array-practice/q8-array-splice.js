// This list contains two elements, both of which are integer lists.

// Change the second list such that it contains the strings 'muffins', 'cookies' and 'donuts'.

let thisList = [[1,2,3], [4,5,6, 'muffins', 'cookies','donuts']];

thisList[1].splice(0,3)
console.log(thisList);