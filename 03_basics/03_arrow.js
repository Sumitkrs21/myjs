const user = {
    username: 'john_doe',
    price : 999,

    welcomeMessage: function(){
        console.log(`Welcome to website ${this.username}`);
    }

}

// user.welcomeMessage(); // This will log "Welcome to website john_doe"
// user.username ="sumit";
// user.welcomeMessage(); // This will log "Welcome to website sumit"
// console.log(this);  // This will log the global object (window in browsers, global in Node.js) because 'this' refers to the global context here


// function chai(){
//     let username = 'john_doe';
//     console.log(this.username);  // This will log 'undefined' because 'this' refers to the global context, not the user object  
// }
// chai(); // This will log the global object (window in browsers, global in Node.js) because 'this' refers to the global context here


// const chai = function(){
//        let username = 'john_doe';
// console.log(this.username);  // This will log 'undefined' because 'this' refers to the global context, not the user object
// }
// chai(); // This will log 'undefined' because 'this' refers to the global context, not the user object


const chai = () => {
    let username = 'john_doe';
    console.log(this ) // This will log the global object (window in browsers, global in Node.js) because 'this' refers to the global context here

}
chai() // This will log the global object (window in browsers, global in Node.js) because 'this' refers to the global context here{}


// Arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope


// Arrow function

// const addTwo = (num1,num2) =>{
    // return num1 + num2;  // This is a block body arrow function, which requires an explicit return statement
// }
// console.log(addTwo(5,10)) // This will return 15

// const addTwo = (num1,num2) => num1 + num2; // This is a concise body arrow function, which implicitly returns the result
// const addTwo = (num1,num2) => (num1 + num2); // This is a concise body arrow function, which implicitly returns the result
// const addTwo = (num1,num2) => {username: "sumit"}; // undefined because the object is not returned correctly
const addTwo = (num1,num2) => ({username: "sumit"});  // This is a concise body arrow function, which implicitly returns an object
console.log(addTwo(5,10)) 

// const myArray = [1,2,3,4,5];
// myArray.forEach()