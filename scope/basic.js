let x=42

{
    let x = 99
    console.log(x)
    // result - 99
}
console.log(x)
// result - 42

{
    console.log(x)
    // result - 42

    // even if we are in a deeper scope,
    // there is no declaration of variable within this deep scope
    // so we will as if there is a variable called 'x' in the outer scope
    // thus we get x=42
}

{ 
    let s= 12
    {
        let s= 100
        {
            console.log(s)
            // result - 100
        }
    }
}



// slibling scope

// scope 1
{
    let y = 100
}

// scope 2
{
    let y= 101
}

// scope 3
{
    let y= 102
}

console.log(y)
// result - undefined
// which should the program take the 'y' from?
// they are all in the same tier of scopes
// and there is no global variable 'y'... 
// thus, can't be defined