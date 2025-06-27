// Immediately Invoked Function Expression (IIFE)

//iife 
(function chai(){
    // named iife
    console.log(`DB connected`);
})(); 

// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
// It is a design pattern that helps to avoid polluting the global scope and can be used
// to create private variables and functions.
// The function is defined and immediately invoked, so it runs right away.

(  (name) => {
    // unnamed iife
    console.log(`DB connected ${name}`);
})("sumit") // This is an example of an IIFE that takes a parameter and logs a message with that parameter.


