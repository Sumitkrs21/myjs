 // Primitive

 // 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100
 const scoreValue = 100.78
const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 213456789034567n

 //Reference (Non primitve)

 // Array, Object, Functions


 const heros = ["sumti","tapan","manish","vanshaj"]
  let myObj={
    name:"sumit",
    age:20

  }

 const myFunction= function(){
    console.log("hello wolrd ");
    
 }
 console.log(typeof id);
 


 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack(Primitive) , Heap(Non-Primitive) 

 let myYoutubeName = "sumitkumar.com"

 let anotherName = myYoutubeName
 anotherName = "domejksjs"
 console.log(anotherName);
 console.log(myYoutubeName);

 let userOne= {
  email:"user@google.com",
  upi:"user@axl"
 }

 let userTwo=userOne
 userTwo.email = "sumit@gmail.com"
console.log(userOne);

 