let student = {
    firstName:'John',
    lastName:'Smith',
    'age': 19,
    contact:{
      email:'johnsmith@fakeschool.com',
      phoneNumber:{
        'country code':'+65',
        'number': '9919912'
      }
    },
    address: {
      'streetName':'Yishun Ring Road',
      'building': 'Blk 171 #11-221'
    },
    classes:[
      "Computing 101", "Computing 102", "Computing 103"
    ],
    grades:[
      {
        'subject name':'Computing 1',
        'Grade': 85
      },
      {
        'subject name':'Computing 2',
        'grade': 31
      },
      {
        'subject name':'Computing 3',
        'grade': 75
      }
    ]
}
//Q1
console.log(student["firstName"], " " , student["lastName"])

//Q3
console.log(student.contact.phoneNumber['country code'], student.contact.phoneNumber['number'] )

//Q4
student['age'] = 21
console.log(student['age'])

//Q5
student.gender = 'male'
console.log(student)

//Q6
student.classes.push = 'Computing 104'
console.log(student)