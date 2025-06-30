const userEmail = []

if(userEmail){
    console.log("got user email");
    
}
else{
    console.log("user email not found");
}

// Truthy and Falsy values in JavaScript
// Falsy values: false, 0, -0,BigInt 0n,"", null, undefined, NaN
// Truthy values: true, 1, -1, BigInt 1n, "0", "false", [], {}, function(){}, new Date(), Infinity, -Infinity

const emptyobj = {}
if(Object.keys(emptyobj).length === 0) {
    console.log("empty object");
}

//nullish coalescing operator (??): null or undefined
let val;
// val1 =5 ?? 10
// val1=null ?? 10
// val1 = undefined ?? 15;
 val1= null ?? 10??89; // 10

 //Ternary operator

//  condition ? expressionIfTrue : expressionIfFalse;
 const iceTeaPrice = 50;
 iceTeaPrice>80 ? console.log("ice tea is expensive") : console.log("ice tea is affordable");