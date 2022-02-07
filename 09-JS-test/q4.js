let x = {
    'abc': 13,
    'def':7
   }
   console.log(x.abcd)
   let y = x.abcd || x.abc;

   console.log(y)