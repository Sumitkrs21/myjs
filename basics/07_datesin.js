//Dates

let myDate = new Date();
// console.log(myDate.toString()); // Current date and time
// console.log(myDate.toDateString()); // Current date in string format
// console.log(myDate.toISOString()); // Current date in ISO format
// console.log(myDate.toLocaleDateString()); // Current date in locale format
// console.log(myDate.toLocaleTimeString()); // Current time in locale format
// console.log(typeof myDate); // Check type of myDate

//let myCreatedDate = new Date(2023,0,23);  // Mon Jan 23 2023
//let myCreatedDate = new Date(2023,0,23,5,3); // 1/23/2023, 5:03:00 AM
let myCreatedDate = new Date("2023-01-14"); 
//console.log(myCreatedDate.toLocaleString()); // Specific date and time

let myTimeStamp = Date.now(); // Current timestamp in milliseconds
// console.log(myTimeStamp); // Current timestamp
// console.log(myCreatedDate.getTime()); // Timestamp of specific date
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date(2025,5,21,2,5,83); // Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)
// console.log(newDate.getSeconds()); // Get current seconds (0-59)
// console.log(newDate.getDay()); // Get current date (1-31)

console.log(newDate.toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone:'Asia/Kolkata', // Set your desired timezone
    timeZoneName: 'long'
})); // to get formate of date according to your locale







