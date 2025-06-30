// // if else statement
// const isUserLoggedIn = true;
// const temperature = 30;
// if(temperature<50) {
//     console.log("less than 50");

// }
// else{
// console.log("temprature is graeter tahn 50");
// }

// <,>,<=,>=,==,!=,===,!==
// score =200
// if(score>100){
//     const power ="fly"
//     console.log(`user has power to ${power}`);
// }
//  console.log(`user has power to ${power}`);


// const balance = 1000;
// if(balance>500) console.log("you can buy a phone"), // single line if statement
// console.log("you can buy a laptop");// multiple statements in single line


// if else nested statement
// const balance = 850;
// if(balance<500) {
//     console.log("less than 500")
// }
//     else if(balance<750) {
//         console.log("less than 750")
//     }
//     else if(balance<900) {
//         console.log("less than 900")
//     }
//     else {        console.log("greater than 900")
//     }


const isUserLoggedIn = true;
const debitCard= true;
const loggedInFromGoogle = false;
const loggedInFrom =true;
if(isUserLoggedIn && debitCard) {
    console.log("Allow to  buy course");
}
if(loggedInFromGoogle || loggedInFrom) {
    console.log("User logged in");
}