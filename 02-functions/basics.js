//---------Start functions creation---------//
function calDist(speed, time){
    dist = speed*time
    return dist
}
function calFuel(distance){
    return distance*0.5 //1km cost 0.5litre
}
//---------End functions creation---------//


// calling the function
let distance = calDist(10,20)
console.log("distance traveled: ",distance)
console.log("fuel needed: ",calFuel(distance))