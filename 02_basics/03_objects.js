//   singleton
// object.create

//object literals

const mySym =Symbol("Key1")

const jsUser = {
    name: "sumit",
    "full name": "sumit kumar",
    age: 20,
    [mySym]: "mykey1",// using sybol as key in object in javascript
    location:"delhi",
    email:"sumit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday", "wednesday"],
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// //assessing sybmol
// console.log(jsUser[mySym]);

//changes in object 

jsUser.email = "sumitgh@gmail.com"
//Object.freeze(jsUser) // this will make the object immutable
jsUser.email = "raj@gmail.com"

  jsUser.greeting = function () {
        console.log("hello JS user");
    }


jsUser.greetingTwo= function () {
    console.log(`hello JS user,${this.name}`);//this 
}

  //console.log(jsUser.greeting())
//  console.log(jsUser.greetingTwo());
// console.log(jsUser);





