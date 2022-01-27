// While loops
// while(<expression>){
// }
let counter = 0 

while(counter<10){
    console.log("happy birthday")
    counter += 1
}


let days = 1
let howMuchToSave = 10
let totalSaved =0
while(totalSaved < 200){
    totalSaved += howMuchToSave
    days = days + 1
}
console.log(days)


let distance = 0 //in m
let priceInput = parseFloat(35) //in dollars


while(priceInput >= 3.50){
    if(distance < 10000){
        distance = distance + 500
    }
    else{
        distance = distance + 400
    }
    priceInput = priceInput - 3.50
}

console.log(distance)

