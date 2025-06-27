let a = 300

if(true){
let a = 10;
const b = 20;
var c = 30; // Using var here would make c function-scoped, but let's use let for block scope
}
// The variables a and b are block-scoped, while c is function-scoped
// console.log(a);  // This will throw an error because a is not defined outside the block
// console.log(b);  // This will throw an error because b is not defined outside the block
// console.log(c);  // This will log 30 because c is function-scoped
// console.log(a);  // This will log 300 because a is defined in the outer scope

for(let i = 0; i < 5; i++) {
    // let j = 10;  // This is block-scoped
    var k = 20;  // This is function-scoped
    // console.log(i);  // This will log the current value of i
}
// console.log(j);  // This will throw an error because j is not defined outside the loop
// console.log(k);  // This will log 20 because k is function-scoped



// nested scopes

function one(){
    const username = "sumit"

    function two(){
        const website = "youtube"
        console.log(username); // This will log "sumit" because two() has access to one()'s scope
        
    }
    // console.log(website);
    
    // two(); // Call the inner function to execute it
}

// one(); // Call the outer function to execute it  

if(true){
    const username = "sumit"
    if(username === "sumit"){
        const website = " youtube"
        // console.log(username + website); // This will log "sumityoutube" because both variables are in scope
    }
    //  console.log(website); // This will throw an error because website is not defined in this scope   
}
// console.log(username); // This will throw an error because username is not defined in this scope


// +++++++++++++++++++++++++ intersection of scopes +++++++++++++++++++++++++

console.log(addone(5))
function addone(num){// This is a function declaration
     return num + 1;
}


// console.log(addTwo(5)) // This will throw an error because addTwo is not defined yet
const addTwo = function(num){// This is  a function expression
    return num + 2;
}
addTwo(7) // This will return 9
 // This will return 7