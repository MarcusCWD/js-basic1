// back tick is located above the tab key
// back tick can have line and spacing
// back tick  can have special symbols without need
// for backslash

let letter =`Dear sir,

    Your bill is overdue on 12/01/2022
    please pay up! 
    
    Our motto: "pay up or we'll come to your house"
    
    Regards,
    Town Council`

console.log(letter)



// sub in variables into back tick
let name1 ="john"
let bill = 200

let formLetter = `
Dear ${name1},
    Your bill is overdue on 12/01/2022
    please pay up $${(bill*0.03) + bill}! 

    Our motto: "pay up or we'll come to your house"

    Regards,
    Town Council`
console.log(formLetter)