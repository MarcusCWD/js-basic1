let sales =[
    {
      'transactionNo': 1321,
      'salesperson': "Grace",
      'dealAmount': 3700
    },
    {
      'transactionNo': 1571,   
      'salesperson': "John",
      'dealAmount': 1200
    },
    {
      'transactionNo': 1321,
      'salesperson': "Melvin",
      'dealAmount': 7500
    },
    {
      'transactionNo': 1200,
      'salesperson': "Melvin",
      'dealAmount': 7500
    },
    {
      'transactionNo': 1210,
      'salesperson': "John",
      'dealAmount': 1200
    },
   ]
//--------------------------------------------------
  //  sales[4].transactionNo = 1500
  //  console.log(sales)

  //  function findByTransaction(trans){

  //       for (let i = 0; i < sales.length; i++){

  //           console.log(sales[i].transactionNo)
  //           if(trans == (sales[i].transactionNo)){
  //               return sales[i].salesperson
  //           }
  //       }
  //  }

  //  console.log(findByTransaction(1210))


  //--------------------------------------------------
//   for (let i = 0; i < sales.length; i++){

//     console.log(sales[i].salesperson + " " + "$" +  sales[i].dealAmount + " " + sales[i].transactionNo)
    
// }
//----------------------------------------------------
let storeValue = []
for (let i = 0; i < sales.length; i++){
  storeValue.push(sales[i].dealAmount)
}

let x = storeValue.sort()
console.log(x)

