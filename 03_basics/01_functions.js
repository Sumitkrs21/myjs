
function sayMyName() {   // Function declaration
console.log("s");
console.log("u");
console.log("m");
console.log("i");
console.log("t");
}

// sayMyName();    // Function call //reference


// function addTwoNumbers(num1, num2) {  // Function declaration with parameters
//     // console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {  // Function declaration with parameters
    // let result = num1 + num2;  // Calculate the sum
    // return result;  // Return the result
    return num1 + num2;  // Directly return the sum
}

const result=addTwoNumbers(5, 9);  // Function call with arguments
// console.log(result);  // 


function loginUserMessage(username = "sumit"){
    if(!username){
        console.log("Please provide a username!");  // Log a message if no username is provided
        return;  // Exit the function if no username is provided
        
    }
    return `User ${username} logged in successfully!`;  // Return a message with the username
}
const message = loginUserMessage("rohit");  // Call the function with an argument
// console.log(message);  // Log the returned message to the console



// Rest operator parameter example
function calculateCartPrice(val1,val2,...num1){
     return num1;  // Return a string with the values and the rest parameter
}
console.log(calculateCartPrice(100,200,300,900,800));  // Call the function with an argument and log the result



//passing object to function
const user={
    username: "sumit",
    price: 1000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  // Log the username and price from the object
}

// handleObject(user);  // Call the function with the user object
handleObject({username: "rohit", price: 2000});  // Call the function with an inline object




//passing array to function
const array = [1, 2, 3, 4, 5];  // Define an array
function handleArray(array){
    return array[2];  // Return the third element of the array
}

// console.log(handleArray(array));  // Call the function with the array and log the result
console.log(handleArray([10, 20, 30, 40, 50]));  // Call the function with an inline array and log the result



