//---------define function----------//
function multi(arg){        //multiply by 2
    return arg*2
}

function func1(arg1, arg2){  //multiply var
    return(arg1*arg2)
}

function dist(spd, time){   //get distance
    let distance = spd * time
    return distance
}

function peri(len, hei){        //get perimeter
    let perimeter = len+len+hei+hei
    return perimeter
}


//---------call function----------//
console.log(multi(2))

console.log(func1(1,2))

console.log(dist(1,2))

console.log(peri(1,2))